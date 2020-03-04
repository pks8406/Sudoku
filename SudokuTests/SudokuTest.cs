using NUnit.Framework;
using Sudoku;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SudokuTests
{
	/// <summary>
	/// Implemented unit test for the Sudoku assigngment
	/// </summary>
	public class SudokuTest
	{
		string[] boxes;

		// Represents each column in grid
		const string columns = "123456789";

		// Represents each row in grid
		const string rows = "ABCDEFGHI";

		[SetUp]
		public void Setup()
		{
			boxes = SudokuGenerator.PerformCrossOperation(rows, columns);

			// populate rows in grid (9 row) as rowunit. E.g. [0] = A1,B1..I1, [1] = A2,B2..I2 etc.
			var rowUnits = new List<string[]>();
			foreach (var c in columns)
			{
				rowUnits.Add(SudokuGenerator.PerformCrossOperation(rows, c.ToString()));
			}

			// populate columns of grid (9 column) as colunit. E.g. [0] = A1,A21..A9, [1] = B12,B2..B9 etc.
			var colUnits = new List<string[]>();
			foreach (var r in rows)
			{
				colUnits.Add(SudokuGenerator.PerformCrossOperation(r.ToString(), columns));
			}
		}

		[Test]
		public void Validate_Sudoku_Input_String()
		{
			var sudoku = "85...24..72......9..4.........1.7..23.5...9...4...........8..7..17..........36.4.";
			bool actual = SudokuGenerator.IsInputSudokuValid(sudoku);
			Assert.IsTrue(actual, "Valid sudoku - Length and allowed degits/characters [0-9.]");
		}

		[Test]
		public void Verify_Processed_Sudoku_Count()
		{
			int count = 0;
			var sudokus = @"4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......
						52...6.........7.13...........4..8..6......5...........418.........3..2...87.....
						6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....
						48.3............71.2.......7.5....6....2..8.............1.76...3.....4......5....
						....14....3....2...7..........9...3.6.1.............8.2.....1.4....5.6.....7.8...".Split('\n');

			foreach (var sudokuInput in sudokus)
			{
				var inputSudokuString = sudokuInput.Trim();

				SortedList<string, string> sortedList = new SortedList<string, string>();
				try
				{
					sortedList = SudokuGenerator.Search(SudokuGenerator.PopulateGridWithPossibleValues(inputSudokuString));

					if (sortedList != null)
					{
						var width = 1 + (from s in boxes select sortedList[s].Length).Max();
						var line = "\n" + String.Join("+", Enumerable.Repeat(new String('-', width * 3), 3).ToArray());

						Console.WriteLine("Output of Sudoku " + inputSudokuString + " - is as below : ");

						foreach (var r in rows)
						{
							Console.WriteLine(String.Join("",
								(from c in columns
								 select sortedList["" + r + c] + ("36".Contains(c) ? "|" : "")).ToArray())
									+ ("CF".Contains(r) ? line : ""));
						}

						Console.WriteLine();
					}
					count++;
				}
				catch (Exception)
				{
					Console.WriteLine("Unable to process : " + inputSudokuString);
					Console.WriteLine();
				}
			}

			//Validate if 5 sudoku processed successfully and loop called exactly 5 times
			Assert.AreEqual(5, count, "Loop called exactly 5 times");
		}

		[Test]
		public void When_Invalid_Sudoku_Do_Not_Populate_Grid_With_Possible_Values()
		{
			var invalidSudoku = "A5...24..72......9..4.........1.7..23.5...9...4...........8..7..17..........36.4.";
			SortedList<string, string> sortedList = SudokuGenerator.PopulateGridWithPossibleValues(invalidSudoku);
			Assert.AreEqual(0, sortedList == null ? 0 : 1, "Invalid sudoku.");
		}

		[Test]
		public void When_Invalid_Sudoku_Search_To_Fail()
		{
			var sudokuWithInvalidPositions = "44....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
			bool actual = SudokuGenerator.IsInputSudokuValid(sudokuWithInvalidPositions);
			Assert.IsTrue(actual, "Valid length, degits in sudoku");

			//Populate list will be called once
			var sortedList = SudokuGenerator.PopulateGridWithPossibleValues(sudokuWithInvalidPositions);
			Assert.AreEqual(1, sortedList == null ? 0 : 1, "Populating grid with possible values successfull");

			//Search will be called and will retun null as result
			sortedList = SudokuGenerator.Search(sortedList);
			Assert.AreEqual(0, sortedList == null ? 0 : 1, "Search fails as only choice fails for the second degit and retuns null as output");
		}
	}
}