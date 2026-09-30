/** Workbook layout shared by the content-pack importer and the pack build tool. */
export const PACK_SHEETS = {
  pack: "Pack",
  scheme: "Scheme of Work",
  lessons: "Lessons",
  questions: "Questions",
  exams: "Exams",
  assignments: "Assignments",
} as const;

export const PACK_COLUMNS = {
  pack: ["Field", "Value"],
  scheme: ["Class", "Term", "Week", "Topic", "Subtopics", "Learning Objectives", "Mandatory"],
  lessons: ["Class", "Topic", "Lesson Title", "Summary", "Minutes", "Notes", "Worked Examples", "Video URL"],
  // Same columns as the question import template, so rows can move between the two.
  questions: ["Subject", "Class", "Department", "Year", "Exam Type", "Topic", "Subtopic", "Question", "A", "B", "C", "D", "Correct Answer", "Explanation", "Marks", "Difficulty", "Source", "Copyright Status"],
  exams: ["Title", "Class", "Exam Type", "Classes Covered", "Terms Covered", "Questions", "Minutes", "Pass Mark", "Max Attempts", "Year", "Description"],
  assignments: ["Title", "Class", "Kind", "Topics", "Questions", "Attempts", "Pass Mark", "Instructions"],
} as const;
