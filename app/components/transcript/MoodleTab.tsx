import BookmarkletButton from "./BookmarkletButton";

export default function MoodleTab() {
  return (
    <div className="transcript-panel" dir="ltr">
      <h3 className="transcript-panel-title">University · Lemida / Moodle</h3>
      <p>
          Moodle systems (like <b>lemida.biu.ac.il</b>) require personal login, and direct access is not possible from the application.
        Instead, drag this bookmarklet to your browser's bookmarks bar, and when you are on the lecture page,
        click on it to download the VTT file.
      </p>

      <div className="transcript-bookmarklet-row">
        <BookmarkletButton />
        <ol className="transcript-bookmarklet-steps">
          <li><b>1.</b> Drag the bookmarklet to your bookmarks bar</li>
          <li><b>2.</b> Open the lecture page in Lemida</li>
          <li><b>3.</b> Click on the bookmarklet</li>
          <li><b>4.</b> Go back and upload the file through the "Upload File" tab</li>
        </ol>
      </div>

      <p style={{ marginTop: 8 }}>
        The bookmarklet only works when you are logged in to the system. It does not send any personal information to any server — the download happens directly in your browser.
      </p>
    </div>
  );
}
