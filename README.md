UI CODE ASSISTANT
(This application focuses on UI UX design and development.)


Design :-

Scenario 1 - Imagine a UI/UX designer, pressed for time, needing to implement a basic feature like a Login/Signup page swiftly. Instead of spending precious minutes designing and coding from scratch, the designer turns to the UI Code Assistant. With a few clicks, they access pre-existing login template codes, instantly integrating them into their project, also picking up the right color scheme for the website can also be a tedious time consuming task, in order to solve this the user can select multiple color combinations available on the website and integrate in their website. Thus optimizing their workﬂow and conserving valuable time.

Scenario 2 - Consider a web developer, who is ﬁnalizing his latest project—a responsive and compatible website for a client. Before deploying it, he wants to ensure that the website functions ﬂawlessly across devices and browsers. To achieve this, he can use UI/UX Genie, a comprehensive testing tool.

Scenario 3 - Picture a UI/UX designer grappling with uncertainty regarding the quality of their UI design or code. Seeking guidance, they turn to the UI Code Assistant for assistance. The assistant diligently reviews the code and design, offering insightful suggestions for improvement. With its constructive feedback, the user gains clarity, reﬁnes their work, and enhances the overall user experience of their project.

Scenario 4 - Envision a novice UI/UX developer eager to learn more about UI development. Overwhelmed by the vast array of resources available, they seek direction from the UI Code Assistant. With a simple inquiry about where to commence their learning journey, the assistant provides comprehensive guidance, recommending starting points, tutorials, and essential information tailored to the beginner's level.

Argument:-

The UI Code Assistant is a powerful tool for UI/UX designers and developers, offering a range of features to streamline workﬂow and enhance project quality. Its ready-made templates for common features like login and signup pages save time and effort, while the color scheme generator simpliﬁes color selection. For beginners, it provides guidance, while for experienced developers, it bridges the gap between design concepts and code implementation. Additionally, it evaluates UI designs and code, providing constructive feedback for improvement. In short, the UI Code Assistant is an invaluable companion for anyone looking to create exceptional digital experiences eﬃciently and effectively.

Prototype Overview:- (Detailed steps are given in the implementation part)

Page 1 - Home Page
The user can ask questions in the prompt area and the UI/UX Genie will provide answers to their questions. The user can access other features like UI code generator, UI Code and design analysis and additional features.
Dark mode/Light mode available on all the pages. ‘Bin’ icon is used to delete chat history.

[Home Page screenshot.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Home-page.png)
[Light mode.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Light-mode.png)

Page 2 - Code generator 
Users can choose the option from the dropdown for which they need a basic code snippet to integrate onto their website and the assistant will provide the code template. Copy button is also available to copy the desired code.

[Code generator page.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Code-generator.png)
 
Page 3 - UI Analysis (UI design and Code Analysis)
Analyze UI design and UI code both the features available on the same page. The page is divided into 2 sections. On the left section the user can paste their code, upload a UI screenshot. On the right side, the AI will provide feedback/suggestions for the UI design and also give an improvised code in the Improved Code section.
[UI code analysis page.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/UI-design-analysis.png)

Page 4 - Responsive Test (additional feature)
Looking at the different types of devices that are available now, it has become a necessity that the web page must work and be displayed properly on each and every device i.e. all the web pages must be responsive. In this case, it can become diﬃcult for the UI developer/designer to verify if the web pages are responsive. Using the ‘Responsive Test’ feature, it is possible to verify the responsiveness of the web page easily and quickly. User has to enter the URL of the link and the UI/UX Genie will show how the website will be displayed on mobile, tablet and desktop.

[Responsive test image 1.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Responsive-test-img1.png)

[Responsive test image 2.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Responsive-test-img2.png)

Page 5 - Cross Browser Compatibility Checker (additional feature)
People use different web browsers to access the internet. The developer/ designer should make sure that the website/page must be available on every browser (at least that are majorly used). The ‘Cross Browser Compatibility test’ feature will check if the website is compatible on different browsers. User will enter the web page URL and click on check compatibility to verify the compatibility. The UI/UX Genie will quickly provide the compatibility report.

[cross browser checker page.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Cross-browser-comapatibility-checker.png)

Page 6 - Color Scheme Guide (additional feature)
While creating a webpage, the designers/developers need to make sure that they use decent colors for the page. Poor color choice may lead to poor user experience and decreased accessibility. The "Color Scheme Guide" feature assists in selecting harmonious and visually appealing color combinations for web pages, enhancing overall design aesthetics and user experience.

[Color scheme guide page1.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Color-scheme-guide-img1.png)

[Color scheme guide page2.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Color-scheme-guide-img2.png)

Implementation:-

Home Page -
1.	Start writing your questions in the prompt area. UI/UX Genie will provide a solution. Enter this exact question - “Help me with a ui design”
2.	The UI code assistant will prompt the user to ask about their expertise level.
Enter your expertise level as -”beginner” / “intermediate” / “advanced” / “expert”. (Copy/enter any of the one expertise level)
3.	Dark/Light mode and delete chat history available near the prompt area.
   
[Home page prompt.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Home-implement-img1.png)

[Home page expertise level.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Home-implement-img2.png)

Code Generator -
1.	Choose the Component type from the dropdown box for which you need the UI code snippet.
2.	Click on ‘Generate Code’ and UI/UX Genie will give you the required code that can be easily copied using the ‘Copy Code’ button.

UI Analysis -
Steps to implement -

1.	Paste the code for ‘Login form’ in the Code Input area for which the user wants an improved code.
2.	Choose ‘Screenshot1.jpg’ from the folder and click on Analyze button. (you can upload any image)
3.	Under the Analysis & Suggestions section, the UI/UX Genie will provide suggestions about the UI design and to improve user experience.
4.	The UI/UX Genie will analyze the code and provide improved code under the Improved code section. (Our page is not providing the complete improved code. Instead it is only giving a small part of the code that will improve the UI.)
5.	The code can be copied using the ‘Copy Code’ button.
6.	An alert box appears conﬁrming that the code is copied to the clipboard.
   
[Code generator componenet type.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Codegenerator-img1.png)

[Generate code.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Codegenerator-img2.png)

[Copy code.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Codegenerator-img3.png)

Explore more features (Additional Features) -

A.	Responsive Test -
 
1.	Copy the URL - ‘https://www.amazon.com/’ in the search bar and click on the ‘Preview Website’ button.
2.	The mobile preview, tablet preview and desktop preview of the web page will be displayed. (Additional devices can be added for preview).
3.	If you directly click on the preview website without entering the URL, an alert message is displayed ‘Please enter a URL to preview.

[Mobile and Tablet preview.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Responsive-website-img1.png)

[Desktop preview.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Responsive-website-img2.png)

B.	Cross Browser Compatibility Checker -
1.	Copy the URL - ‘https://www.amazon.com/’ and click on the ‘Check compatibility’ button to view Compatibility check results. (We have displayed an example of how the compatibility results can be displayed.)
2.	The user can either copy the URL or copy the HTML code.
   
[Cross browser.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Cross-browser-test-img1.png)

C.	Color Scheme Guide -
1.	This page displays a set of colors that can be used for your website. Click on ‘Copy color Set 1’ to copy the hex values of the colors in set 1.
2.	Scroll down to explore more color sets and copy the hex values.
3.	The user can get an idea on which color combinations would be perfectly suitable for their website.
   
[Color guide.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Color-scheme-guide-img1.png)

[Color guide.png](https://github.com/miloni1211/UI-Code-Assistant/raw/master/ReadMe-Images/Color-scheme-guide-img2.png)

