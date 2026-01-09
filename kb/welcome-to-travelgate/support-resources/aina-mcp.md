---
sidebar_position: 5
---

# AIna MCP

## Supercharge Your Workflow with AIna MCP

At Travelgate, we continuously enhance your support experience. As part of this effort, AIna—Travelgate's AI assistant—now includes **Model Context Protocol (MCP)** functionality.

With AIna's MCP server, your applications can connect directly to **Travelgate Documentation**, giving you access to the information you need exactly where and when you need it—without switching tools.


## What Is an MCP Server?

The **[Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro)** is an open standard introduced by Anthropic that allows AI tools—such as ChatGPT, Claude, or Cursor—to access external APIs, databases, and systems in real time.

An MCP system is made up of three components:

- **Host**  
  The AI application you use (for example, [ChatGPT](https://platform.openai.com/docs/guides/tools-connectors-mcp), [Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop), [Cursor](https://cursor.com/en-US/docs/context/mcp), or [VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)).

- **Client**  
  A built-in connector that manages communication between the host and MCP servers.

- **MCP Server**  
  An external service that provides real-time data to power AI responses. In this case, the **AIna MCP server** connects AI tools to Travelgate Documentation.


## Why Use the AIna MCP Server?

Integrating Travelgate knowledge directly into your daily workflow offers several benefits:

- **Real-time insights**  
  Access live documentation instantly.

- **Improved efficiency**  
  Reduce context switching and “tab overload” by getting answers directly in your IDE or chat environment.

- **Grounded responses**  
  Receive accurate, platform-specific guidance for coding and troubleshooting.

This is especially useful during certification processes, where having trusted, up-to-date information inside your development environment can significantly speed up your work.


## AIna MCP Configuration Guides

To access Travelgate’s Documentation MCP server (`https://travelgate.mcp.kapa.ai`), follow these steps:

1. Navigate to the Travelgate website (either the **Portal** or the **Documentation** site).
2. Click the **AIna widget** located at the bottom-right corner of the screen.
3. In the AIna chat window, click **Use MCP** (top-right corner of the chatbox).
4. Select the AI tool you want to connect (Cursor, VS Code, Claude Code, or copy the MCP URL for Claude or ChatGPT).
5. Follow the setup instructions for your selected tool. Examples are provided below.

    <img src="https://storage.travelgate.com/kbase/0-tg-aina-mcp-web-widget.png" alt="0-tg-aina-mcp-web-widget" width="500" height=""/>


### Cursor IDE (One-Click Install)

1. Open **File > Preferences > Cursor Settings**.
2. Navigate to **Tools & MCP** and click **New MCP Server**.
3. Use the following configuration:
   - **Name:** `travelgate-docs`
   - **Type:** `streamableHttp` (pre-filled)
   - **URL:** `https://travelgate.mcp.kapa.ai`  

        <img src="https://storage.travelgate.com/kbase/1-tg-aina-mcp-cursor-1.png" alt="1-tg-aina-mcp-cursor-1" width="500" height=""/>

4. Verify your account when prompted.
   <img src="https://storage.travelgate.com/kbase/2-tg-aina-mcp-cursor-2.png" alt="2-tg-aina-mcp-cursor-2" width="500" height=""/>

5. Ensure the tool `search_travelgate_knowledge_sources` is enabled.
   <img src="https://storage.travelgate.com/kbase/3-tg-aina-mcp-cursor-3.png" alt="3-tg-aina-mcp-cursor-3" width="500" height=""/>
   <img src="https://storage.travelgate.com/kbase/4-tg-aina-mcp-cursor-4.png" alt="4-tg-aina-mcp-cursor-4" width="500" height=""/>


### VS Code (One-Click Install)

1. Open the VS Code command palette or search bar.
2. Search for **MCP: Add Server**.
3. Select **HTTP (HTTP or Server-Sent Events)**.
4. Configure the server with the following details:
   - **Name:** `travelgate-docs`
   - **Type:** `http`
   - **URL:** `https://travelgate.mcp.kapa.ai`

        <img src="https://storage.travelgate.com/kbase/5-tg-aina-mcp-vscode-1.png" alt="5-tg-aina-mcp-vscode-1" width="500" height=""/>

    You can also add the configuration manually:

        ```json
        "travelgate-docs": {
        "type": "http",
        "url": "https://travelgate.mcp.kapa.ai"
        }
        ```

    <img src="https://storage.travelgate.com/kbase/9-tg-aina-mcp-vscode-4.png" alt="9-tg-aina-mcp-vscode-4" width="500" height=""/>

5. Verify your account when prompted.

    <img src="https://storage.travelgate.com/kbase/6-tg-aina-mcp-vscode-2.png" alt="6-tg-aina-mcp-vscode-2" width="500" height=""/>
    <img src="https://storage.travelgate.com/kbase/7-tg-aina-mcp-vscode-3.png" alt="7-tg-aina-mcp-vscode-3" width="500" height=""/>

6. Ensure the tool `search_travelgate_knowledge_sources` is enabled.
    <img src="https://storage.travelgate.com/kbase/10-tg-aina-mcp-vscode-5.png" alt="10-tg-aina-mcp-vscode-5" width="500" height=""/>
    <img src="https://storage.travelgate.com/kbase/12-tg-aina-mcp-vscode-7.png" alt="12-tg-aina-mcp-vscode-7" width="500" height=""/>


### ChatGPT

#### 1. Enable Developer Mode

1. Go to **Settings > Apps > Advanced Settings**.
2. Toggle **Developer Mode** on.

    <img src="https://storage.travelgate.com/kbase/13-tg-aina-mcp-chatgpt-1.png" alt="13-tg-aina-mcp-chatgpt-1" width="400" height=""/>

    A new **Create app** button will appear in the top-right corner. Alternatively, return to the Apps main page and click **Create app** next to **Advanced Settings**.

#### 2. Create a New App

In the **New App** screen, fill in the following details:

- **Name:** Travelgate Docs (MCP)
- **MCP Server URL:** https://travelgate.mcp.kapa.ai
- **Authentication:** OAuth

    <img src="https://storage.travelgate.com/kbase/14-tg-aina-mcp-chatgpt-2.png" alt="14-tg-aina-mcp-chatgpt-2" width="300" height=""/>

#### 3. Final Step

Validate your account to complete the setup.


## Tips for Getting Better Results with AIna MCP

To [maximize AIna results](/kb/welcome-to-travelgate/support-resources/aina-user-guide) when using Travelgate’s Documentation MCP:

- Be specific in your questions.
- Use relevant keywords.
- Add context.
- Break down complex requests into smaller, clear steps.

This approach helps AIna provide more accurate and relevant responses based on Travelgate documentation.