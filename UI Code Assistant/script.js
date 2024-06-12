const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const homeButton = document.querySelector("#home-btn");

let userText = null;

const loadDataFromLocalstorage = () => {
    const themeColor = localStorage.getItem("themeColor");
    if(themeColor === null){
        themeColor = "dark_mode";
        localStorage.setItem("themeColor", themeColor);
    }

    const isDarkMode = themeColor === "dark_mode";
    document.body.classList.toggle("dark-mode", isDarkMode);
    themeButton.innerText = isDarkMode ? "dark_mode" : "light_mode";

    const defaultText = `<div class="default-text">
                            <h1>UI/UX Genie</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`

    chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
}

const createChatElement = (content, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = content;
    return chatDiv;
}

const keywordResponses = {
    "help me with a ui design": "What is your expertise level ?",
    "help": "What is your expertise level ?",
    "beginner": "UI design is all about creating intuitive and aesthetically pleasing interfaces for users. Start with understanding the basics of color theory, typography, and layout. Tools like Adobe XD, Sketch, and Figma can help you craft designs. Focus on creating a user flow that's easy to follow and try to keep your designs simple yet effective. Look at popular websites for inspiration and practice by recreating your favorite designs.",
    "intermediate": "Now that you're comfortable with design principles, it's time to dive deeper into user experience. Consider the psychology behind UI design, like how color impacts user emotions or how the 'F' pattern of reading content on the web can guide your layout choices. Experiment with wireframing and prototyping, and get feedback from user testing to iterate on your designs. Start to familiarize yourself with UI guidelines and standards, such as Google's Material Design or Apple’s Human Interface Guidelines.",
    "advanced": "You're likely well-versed in design tools and principles by now. Start challenging yourself with more complex projects that require intricate UI interactions and state changes. Learn to create design systems for consistency and efficiency, and understand how to design for accessibility, ensuring your UIs are usable by everyone. Work on personal projects that solve specific problems or contribute to open-source projects to hone your skills.",
    "expert": "As an expert, you should be pushing the boundaries of current UI trends and creating new ones. Lead UX research to discover innovative solutions to complex problems. Your focus might shift more towards strategic decisions, leading design teams, or specializing in areas like motion design or voice interfaces. Keep abreast of the latest in technology, such as AR/VR interfaces or AI in design, to incorporate cutting-edge techniques into your work. Networking with other experts and contributing to thought leadership in design can further your expertise.",
};

const copyResponse = (copyBtn) => {
    const reponseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(reponseTextElement.textContent);
    copyBtn.textContent = "done";
    setTimeout(() => copyBtn.textContent = "content_copy", 1000);
}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim();
    if (!userText) return;

    chatInput.value = "";
    chatInput.style.height = `${initialInputHeight}px`;

    const outgoingHtml = `<div class="chat-content">
                            <div class="chat-details">
                                <img src="images/user.png" alt="user-img">
                                <p>${userText}</p>
                            </div>
                         </div>`;
    const outgoingChatDiv = createChatElement(outgoingHtml, "outgoing");
    chatContainer.querySelector(".default-text")?.remove();
    chatContainer.appendChild(outgoingChatDiv);
    hideNavBoxes();

    showTypingAnimation();

    setTimeout(() => {
        chatContainer.querySelectorAll('.chat.typing').forEach(typingDiv => typingDiv.remove());

        let responseText = keywordResponses[userText.toLowerCase()] || "Sorry, I can't help with this. Please try again.";
        const incomingHtml = `<div class="chat-content">
                                <div class="chat-details">
                                    <img src="images/genie.png" alt="chatbot-img">
                                    <p>${responseText}</p>
                                </div>
                             </div>`;
        const incomingChatDiv = createChatElement(incomingHtml, "incoming");
        chatContainer.appendChild(incomingChatDiv);

        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        localStorage.setItem("all-chats", chatContainer.innerHTML);
    }, 2000);

    chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

const showTypingAnimation = () => {
    const typingHtml = `<div class="chat-content typing">
                            <div class="chat-details">
                                <img src="images/genie.png" alt="chatbot-img">
                                <div class="typing-animation">
                                    <div class="typing-dot"></div>
                                    <div class="typing-dot"></div>
                                    <div class="typing-dot"></div>
                                </div>
                            </div>
                        </div>`;
    const typingDiv = createChatElement(typingHtml, "typing");
    chatContainer.appendChild(typingDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

sendButton.addEventListener("click", handleOutgoingChat);

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleOutgoingChat();
    }
});

function appendChat(message, type) {
    const chatHtml = `<div class="chat-content">
                        <div class="chat-details">
                            <p>${message}</p>
                        </div>
                      </div>`;
    const chatDiv = createChatElement(chatHtml, type);
    chatContainer.appendChild(chatDiv);
}

homeButton.addEventListener("click", () => {
        localStorage.removeItem("all-chats");
        loadDataFromLocalstorage();
        showNavBoxes();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('themeColor') || 'dark_mode'; // Default to dark mode if not set
    const isDarkMode = currentTheme === 'dark_mode';

    document.body.classList.toggle('dark-mode', isDarkMode); // Apply dark mode if it should be active
    themeButton.innerText = isDarkMode ? 'light_mode' : 'dark_mode'; // Set the button text accordingly

    themeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('themeColor', isDarkMode ? 'dark_mode' : 'light_mode');
        themeButton.innerText = isDarkMode ? 'light_mode' : 'dark_mode';
    });
});

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {
    chatInput.style.height =  `${initialInputHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

function hideNavBoxes() {
    const navBoxesContainer = document.querySelector('.nav-boxes-container');
    if (navBoxesContainer) {
        navBoxesContainer.style.display = 'none';
    }
}

function showNavBoxes() {
    const navBoxesContainer = document.querySelector('.nav-boxes-container');
    if (navBoxesContainer) {
        navBoxesContainer.style.display = 'flex';
    }
}

loadDataFromLocalstorage();