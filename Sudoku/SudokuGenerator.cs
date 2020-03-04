using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Sudoku
{
	/// <summary>
	/// This class contains data members and member funtion to process Sudoku.
	/// </summary>
	public static class SudokuGenerator
	{
		// Array of 81 cells (A1 to I9)
		static string[] boxes;

		// Represents each column in grid
		const string columns = "123456789";

		// Represents each row in grid
		const string rows = "ABCDEFGHI";

		// List having key/Values. To hold column/row/sqare peers for a cell
		static SortedList<string, string[]> peers;

		// List of Array to hold 27 items (9 column, 9 row, 9 box)
		static List<string[]> unitList;

		/// <summary>
		/// Static constructor which builds the core objects ONLY once for processing the Sudoku
		/// </summary>
		static SudokuGenerator()
		{
			boxes = PerformCrossOperation(rows, columns);

			// populate rows in grid (9 row) as rowunit. E.g. [0] = A1,B1..I1, [1] = A2,B2..I2 etc.
			var rowUnits = new List<string[]>();
			foreach (var c in columns)
			{
				rowUnits.Add(PerformCrossOperation(rows, c.ToString()));
			}

			// populate columns of grid (9 column) as colunit. E.g. [0] = A1,A21..A9, [1] = B12,B2..B9 etc.
			var colUnits = new List<string[]>();
			foreach (var r in rows)
			{
				colUnits.Add(PerformCrossOperation(r.ToString(), columns));
			}

			// populate box of grid (9 box) as squareunit. E.g. [0] = A1,A2,A3,B1,B2,B3,C1,C2,C3
			var squareUnits = new List<string[]>();
			foreach (var rs in new[] { "ABC", "DEF", "GHI" })
			{
				squareUnits.AddRange(new[] { "123", "456", "789" }.Select(cs => PerformCrossOperation(rs, cs)));
			}

			// To hold 27 items (9 column, 9 row, 9 box)
			unitList = new List<string[]>();
			unitList.AddRange(rowUnits);
			unitList.AddRange(colUnits);
			unitList.AddRange(squareUnits);

			// To hold Column, row and square for the key A1, Values will be first row, first column and squery where A1 is box value
			var units = new SortedList<string, string[][]>();
			foreach (var s in boxes)
			{
				units.Add(s, unitList.Where(x => x.Contains(s)).ToArray());
			}

			// To hold the cell peers. E.g. for A1 it holds column value, row value and box value except A1. (E.g. 20 values for the key (8 row-cell, 8 column-cell, 4-box cell)
			peers = new SortedList<string, string[]>();
			foreach (var s in boxes)
			{
				var peer = new List<string>();
				foreach (var row in units[s])
				{
					var elemStrings = row.Where(x => x != s).ToArray();
					foreach (var elem in elemStrings)
					{
						if (!peer.Contains(elem))
							peer.Add(elem);
					}
				}

				peers.Add(s, peer.ToArray());
			}
		}

		/// <summary>
		/// Return [a+b for a in A for b in B] 
		/// </summary>
		/// <param name="a">left side string</param>
		/// <param name="b">right side string</param>
		/// <returns>Array of string after cross operation</returns>
		public static string[] PerformCrossOperation(string a, string b)
		{
			var results = new List<string>();

			foreach (var charA in a)
				foreach (var charB in b)
					results.Add(charA + "" + charB);

			return results.ToArray();
		}

		/// <summary>
		/// Validate the input sudoku string.
		/// </summary>
		/// <param name="grid"></param>
		/// <returns></returns>
		public static bool IsInputSudokuValid(string grid)
		{
			bool isValid = true;
			if (grid.Length != 81) { isValid = false; }

			if (!new Regex("^[0-9.]*$").Match(grid).Success && isValid) { isValid = false; }
			return isValid;
		}

		/// <summary>
		/// Given a string of 81 digits (degit or . or 0), returns sorted list of {cell:values (all possible)}
		/// </summary>
		/// <param name="grid">The complete grid (81 cells)</param>
		/// <returns>optimized grid cell/value list - Will all possible vulues list</returns>
		public static SortedList<string, string> PopulateGridWithPossibleValues(string grid)
		{
			SortedList<string, string> gridWillAllPossibleValues = null;

			//check if grid length is valid (81 character) - If not return
			if (IsInputSudokuValid(grid))
			{
				var values = new List<string>();
				string alldigits = "123456789";

				//Populate all empty/unknown input character with all possible value e.g 123456789
				foreach (var inputCellValue in grid)
				{
					if (inputCellValue == '.' || inputCellValue == '0')
						values.Add(alldigits);
					else if (alldigits.Contains(inputCellValue))
						values.Add("" + inputCellValue);
				}

				//Mapping box to values that found above
				gridWillAllPossibleValues = new SortedList<string, string>();
				foreach (var item in boxes.Zip(values, (a, b) => new { Box = a, Grid = b }))
				{
					gridWillAllPossibleValues.Add(item.Box, item.Grid);
				}
			}
			return gridWillAllPossibleValues;
		}

		/// <summary>
		/// provide solved values in grid
		/// </summary>
		/// <param name="values"></param>
		/// <returns></returns>
		private static SortedList<string, string> Eliminate(SortedList<string, string> values)
		{
			//gets the solved boxs (where the length of value is exactly 1)
			var solvedValues = values.Keys.Where(box => values[box].Length == 1).ToList();

			//loop through solved box, find its peers and remove that value from it
			foreach (var box in solvedValues)
			{
				var digit = values[box];
				foreach (var peer in peers[box])
				{
					if (digit != "")
						values[peer] = values[peer].Replace(digit, "");
				}
			}

			return values;
		}

		/// <summary>
		/// Check if there is only one possibility of having a cell value (considering square and peer), if so update it
		/// </summary>
		/// <param name="values"></param>
		/// <returns>optimized grid cell/value list</returns>
		private static SortedList<string, string> OnlyChoice(SortedList<string, string> values)
		{
			foreach (var unit in unitList)
			{
				foreach (var digit in "0123456789")
				{
					var dplaces = unit.Where(box => values[box].Contains(digit)).ToList();

					if (dplaces.Count == 1)
						values[dplaces[0]] = digit.ToString();
				}
			}

			return values;
		}

		/// <summary>
		/// This function performs constraint propagation.
		/// (1) If a square has only one possible value, then eliminate that value from the square's peers.
		/// (2) If a unit has only one possible place for a value, then put the value there.
		/// </summary>
		/// <param name="values">Sorted list of key and value pairs of grid</param>
		/// <returns>optimized grid cell/value list</returns>
		private static SortedList<string, string> PerformConstraintPropagation(SortedList<string, string> values)
		{
			var exit = false;

			while (!exit)
			{
				var solvedValuesBefore = values.Keys.Count(box => values[box].Length == 1);

				if (!values.Values.Any(x => x.Length > 1))
				{
					exit = true;
					continue;
				}

				//If a square has only one possible value, then eliminate that value from the square's peers.
				values = Eliminate(values);

				if (!values.Values.Any(x => x.Length > 1))
				{
					exit = true;
					continue;
				}

				//If a unit has only one possible place for a value, then put the value there.
				values = OnlyChoice(values);

				var solvedValuesAfter = values.Keys.Count(box => values[box].Length == 1);

				exit = (solvedValuesBefore == solvedValuesAfter);

				if ((values.Keys.Count(box => values[box].Length == 0)) > 0)
					return null;
			}

			return values;
		}

		/// <summary>
		/// Perform seach operation to find valid cell value.
		/// </summary>
		/// <param name="values">The sorted list of cell and values</param>
		/// <returns>optimized grid cell/value list</returns>
		public static SortedList<string, string> Search(SortedList<string, string> values)
		{
			values = PerformConstraintPropagation(values);

			if (values == null)
				return null;

			if (boxes.Select(s => values[s].Length == 1).All(x => x))
				return values; // solved

			// Choose the unfilled box value with the fewest possibilities
			var pairs = new SortedList<string, int>();
			foreach (var s in boxes)
			{
				if (values[s].Length > 1)
					pairs.Add(s, values[s].Length);
			}

			string boxWithMinLength = null;
			int minLength = 0;
			foreach (var pair in pairs)
			{
				if (boxWithMinLength == null)
				{
					boxWithMinLength = pair.Key;
					minLength = pair.Value;
				}
				else
				{
					if (pair.Value < minLength)
					{
						boxWithMinLength = pair.Key;
						minLength = pair.Value;
					}
				}
			}

			foreach (var value in values[boxWithMinLength ?? throw new System.InvalidOperationException()])
			{
				var newSudoku = new SortedList<string, string>();
				foreach (var x in values)
					newSudoku.Add(x.Key, x.Value);

				newSudoku[boxWithMinLength] = "" + value;
				var attempt = Search(newSudoku);

				if (attempt != null)
					return attempt;
			}

			return null;
		}
	}
}
