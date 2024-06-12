UI CODE ASSISTANT

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
[Images for ReadMe/Home page.png](https://github.com/miloni1211/UI-Code-Assistant/blob/master/Images for ReadMe/Home page.png)

Page 2 - Code generator 
Users can choose the option from the dropdown for which they need a basic code snippet to integrate onto their website and the assistant will provide the code template. Copy button is also available to copy the desired code.
 
Page 3 - UI Analysis (UI design and Code Analysis)
Analyze UI design and UI code both the features available on the same page. The page is divided into 2 sections. On the left section the user can paste their code, upload a UI screenshot. On the right side, the AI will provide feedback/suggestions for the UI design and also give an improvised code in the Improved Code section.

Page 4 - Responsive Test (additional feature)
Looking at the different types of devices that are available now, it has become a necessity that the web page must work and be displayed properly on each and every device i.e. all the web pages must be responsive. In this case, it can become diﬃcult for the UI developer/designer to verify if the web pages are responsive. Using the ‘Responsive Test’ feature, it is possible to verify the responsiveness of the web page easily and quickly. User has to enter the URL of the link and the UI/UX Genie will show how the website will be displayed on mobile, tablet and desktop.

Page 5 - Cross Browser Compatibility Checker (additional feature)
People use different web browsers to access the internet. The developer/ designer should make sure that the website/page must be available on every browser (at least that are majorly used). The ‘Cross Browser Compatibility test’ feature will check if the website is compatible on different browsers. User will enter the web page URL and click on check compatibility to verify the compatibility. The UI/UX Genie will quickly provide the compatibility report.

Page 6 - Color Scheme Guide (additional feature)
While creating a webpage, the designers/developers need to make sure that they use decent colors for the page. Poor color choice may lead to poor user experience and decreased accessibility. The "Color Scheme Guide" feature assists in selecting harmonious and visually appealing color combinations for web pages, enhancing overall design aesthetics and user experience.

Implementation:-

Home Page -
1.	Start writing your questions in the prompt area. UI/UX Genie will provide a solution. Enter this exact question - “Help me with a ui design”
2.	The UI code assistant will prompt the user to ask about their expertise level.
Enter your expertise level as -”beginner” / “intermediate” / “advanced” / “expert”. (Copy/enter any of the one expertise level)
3.	Dark/Light mode and delete chat history available near the prompt area.
