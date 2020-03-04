using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace Sudoku.Controllers
{
	[Route("api/[controller]")]
	public class DataController : Controller
	{
		/// <summary>
		/// API which provides sudoku implementation
		/// </summary>
		/// <param name="sudokuToProcess">Input string of sudoku to process</param>
		/// <returns>The Sudoku processed output - Json - ArrayofArray</returns>
		[HttpGet("SolveSudoku/{sudokuToProcess}")]
		public ActionResult SolveSudoku(string sudokuToProcess)
		{
			var stopWatch = Stopwatch.StartNew();

			SortedList<string, string> extendedGridValues = SudokuGenerator.PopulateGridWithPossibleValues(sudokuToProcess);
			SortedList<string, string> oneDimensionalSudokuResult = SudokuGenerator.Search(extendedGridValues);

			string[,] SudokuArrayOutput = null;
			if (oneDimensionalSudokuResult != null && oneDimensionalSudokuResult.Count > 0)
			{
				SudokuArrayOutput = new string[9, 9];
				int elementPosition = 0;
				for (int row = 0; row < 9; row++)
				{
					for (int cell = 0; cell < 9; cell++)
					{
						SudokuArrayOutput[row, cell] = oneDimensionalSudokuResult.Values.ToArray()[elementPosition];
						elementPosition++;
					}
				}
			}

			stopWatch.Stop();

			var returnObject = new { timeTakenToProcess = Convert.ToInt32(stopWatch.Elapsed.TotalMilliseconds), sudokuOutput = SudokuArrayOutput };
			return Json(returnObject);
		}
	}
}
