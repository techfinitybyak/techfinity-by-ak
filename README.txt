TECHFINITY BY AK — WEBSITE SETUP GUIDE
=====================================

WHAT'S INCLUDED
- index.html: website content
- styles.css: premium dark-tech design and responsive layouts
- script.js: mobile navigation and contact-form behavior
- assets/logo.svg: temporary Techfinity-inspired logo mark
- assets/favicon.svg: browser tab icon

IMPORTANT FIRST CUSTOMIZATIONS
1. Replace assets/logo.svg with your actual logo image if you have it as a PNG/SVG.
   If using a PNG, save it as assets/logo.png and update the two logo references in index.html:
   src="assets/logo.svg" -> src="assets/logo.png"
2. Confirm the YouTube channel URL in index.html. Current links use:
   https://www.youtube.com/@TechfinitybyAK
   If your channel has a different handle, replace those URLs with your real channel URL.
3. The featured Short currently links to:
   https://youtube.com/shorts/F8oHy8jqX0Y
4. Contact form: the form opens the visitor's email app with a pre-filled email to
   techfinity.by.ak@gmail.com. It does not silently submit or store form entries.
5. The videos area has a featured video plus links to the channel's latest uploads/Shorts.
   It does NOT automatically fetch and render new thumbnails yet. That can be added in a
   later step using YouTube's official API or a feed service.

HOW TO TEST ON YOUR COMPUTER
- Extract the ZIP file.
- Open index.html in Chrome, Firefox or Edge.
- Click the navigation links and test the contact form.
- To test mobile layout, resize your browser window.

PUBLISH FOR FREE WITH GITHUB PAGES
1. Sign in at https://github.com/ (create a free account if needed).
2. Click the + menu, then New repository.
3. Name it: techfinity-by-ak
4. Set it to Public, then create the repository.
5. Use Add file > Upload files.
6. Upload index.html, styles.css, script.js, README.txt, and the assets folder.
   Make sure index.html is in the repository's top level, not inside another folder.
7. Click Commit changes.
8. Open repository Settings > Pages.
9. Under Build and deployment, choose Deploy from a branch.
10. Select branch main and folder /(root), then Save.
11. Wait a few minutes. GitHub will show your website URL in the Pages section.
    It will usually look like https://YOUR-USERNAME.github.io/techfinity-by-ak/
12. Open that URL on your phone and computer to test.

FREE HOSTING NOTES
GitHub Pages provides static hosting and HTTPS on a github.io address. A custom domain
such as .com is optional and usually costs money. Do not add passwords, payment details,
or private/sensitive information to a public repository.

CONTACT FORM NOTE
GitHub Pages cannot run a server-side form processor by itself. This version uses a mailto
link, so the visitor must have an email app configured. If you later want an online form that
submits without opening an email app, a third-party form service or a separate backend is needed.
Review the provider's privacy terms and free-plan limits before using it.

LATEST YOUTUBE VIDEOS NOTE
The page includes a featured Short and links to the channel's videos and Shorts pages. A truly
automatic latest-video grid requires an API/feed integration. YouTube Data API setup is described
here: https://developers.google.com/youtube/v3/getting-started


PROJECT LIST
The Projects section currently includes all 13 project names supplied by the owner. Links for projects without a specific video currently lead to the channel homepage; replace them with each project's video link when available.
