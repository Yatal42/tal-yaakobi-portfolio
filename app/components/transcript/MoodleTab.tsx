import BookmarkletButton from "./BookmarkletButton";

export default function MoodleTab() {
  return (
    <div className="transcript-panel" dir="rtl">
      <h3 className="transcript-panel-title">אוניברסיטה · למידע / Moodle</h3>
      <p>
        מערכות Moodle (כמו <b>lemida.biu.ac.il</b>) דורשות התחברות אישית, ולא ניתן לגשת אליהן ישירות
        מהאפליקציה. במקום זה, גררי את הסימניה הזאת לסרגל הסימניות בדפדפן שלך, וכשתהיי בדף ההרצאה
        — לחצי עליה כדי להוריד את קובץ ה-VTT.
      </p>

      <div className="transcript-bookmarklet-row">
        <BookmarkletButton />
        <span className="transcript-bookmarklet-hint">
          <b>1.</b> גררי את הכפתור לסרגל הסימניות &nbsp;·&nbsp;
          <b>2.</b> פתחי דף הרצאה ב-Lemida &nbsp;·&nbsp;
          <b>3.</b> לחצי על הסימניה &nbsp;·&nbsp;
          <b>4.</b> חזרי הנה והעלי את הקובץ דרך הטאב "העלאת קובץ"
        </span>
      </div>

      <p style={{ marginTop: 8 }}>
        הסימניה עובדת רק כשאת מחוברת למערכת. היא לא שולחת מידע אישי לאף שרת — ההורדה קורית ישירות בדפדפן שלך.
      </p>
    </div>
  );
}
