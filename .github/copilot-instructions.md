# Travelgate Documentation

The Travelgate Documentation repository is a comprehensive documentation website built using Docusaurus 3, featuring three main content sections: general documentation (docs), GraphQL API reference (api), and knowledge base (kb). The site generates GraphQL API documentation from a live schema and includes automation tools for content management.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Prerequisites and Environment Setup
- **Node.js requirement**: Version 18 or above (current environment: v20.19.4 ✅)
- **Required environment variable**: `TRAVELGATE_API_KEY` for GraphQL schema generation (get from team)
- **Internet access**: Required for `api.travelgate.com` during schema generation

### Bootstrap, Build, and Test the Repository

**CRITICAL: NEVER CANCEL builds or long-running commands. Set timeouts appropriately and wait for completion.**

1. **Install dependencies** (takes ~2 minutes):
   ```bash
   npm install
   ```
   - **TIMEOUT**: Set to 5+ minutes. NEVER CANCEL.
   - May show deprecation warnings - these are normal and don't affect functionality

2. **Generate GraphQL schema** (requires API key):
   ```bash
   npm run generate-schema
   ```
   - **TIMEOUT**: Set to 3+ minutes. NEVER CANCEL.
   - **FAILS without TRAVELGATE_API_KEY**: Set environment variable first
   - **FAILS without network access**: Cannot access `api.travelgate.com` in sandboxed environments
   - **Workaround**: Use existing schema file or minimal schema for testing

3. **Generate API documentation from schema** (takes ~2 seconds):
   ```bash
   npx docusaurus graphql-to-doc --force
   ```
   - **TIMEOUT**: Set to 3+ minutes. NEVER CANCEL.
   - **REQUIRED**: Must run after schema generation
   - Generates API documentation in `api/` directory

4. **Fix sidebar schema configuration**:
   ```bash
   cp api-sidebar-schema.dist api/sidebar-schema.js
   ```
   - **REQUIRED**: Always run after GraphQL documentation generation
   - **Critical**: Build will fail without this step

5. **Build the website** (takes ~67 seconds):
   ```bash
   npm run build
   ```
   - **TIMEOUT**: Set to 10+ minutes. NEVER CANCEL.
   - **Expected behavior**: May fail with broken link errors if using incomplete schema
   - **Success criteria**: Look for "Creating an optimized production build" completion
   - **Memory**: Uses `NODE_OPTIONS="--max_old_space_size=4096"` in CI for large builds

### Development Commands

6. **Start development server**:
   ```bash
   npm start
   ```
   - **Port**: Runs on http://localhost:4200
   - **TIMEOUT**: Set to 5+ minutes for initial startup. NEVER CANCEL.
   - **Hot reload**: Most changes reflect live without restart

7. **Clear build cache**:
   ```bash
   npm run clear
   ```
   - **Use when**: Build issues or after major changes
   - **TIMEOUT**: Set to 3+ minutes. NEVER CANCEL.

8. **Serve built site**:
   ```bash
   npm run serve
   ```
   - **Requires**: Must run `npm run build` first
   - **Use for**: Testing production build locally

## Validation

### Pre-commit Validation
**ALWAYS run these commands before committing changes:**

1. **Validate MDX structure** (validates 722 files):
   ```bash
   npx docusaurus-mdx-checker
   ```
   - **TIMEOUT**: Set to 5+ minutes. NEVER CANCEL.
   - **Success criteria**: "All X MDX files compiled successfully!"

2. **Test development server startup**:
   ```bash
   npm start
   ```
   - **Manual test**: Open http://localhost:4200 and verify site loads
   - **Kill server**: Use Ctrl+C or `kill` command when done

### Manual Validation Scenarios

**CRITICAL: After making changes, ALWAYS manually validate through complete user scenarios:**

1. **Navigation validation**:
   - Test main navigation: Documentation, Knowledge Base, GraphQL API Reference
   - Verify search functionality works
   - Check at least 3 different documentation pages load correctly

2. **GraphQL API Reference validation**:
   - Navigate to /api route
   - Verify generated API documentation displays correctly
   - Test at least one API endpoint page for proper formatting

3. **Content validation**:
   - Verify MDX content renders properly (no compilation errors)
   - Test interactive components if any exist
   - Check that all internal links work

4. **Build validation**:
   - After significant changes, always run full build to catch broken links
   - **Expected**: Some broken link warnings are normal with incomplete schemas

## GraphQL Documentation Automation

### Advanced GraphQL Documentation Scripts
The repository includes automated tools for enhanced GraphQL documentation:

1. **Fetch GraphQL schema** (requires API access):
   ```bash
   node src/graphql/scripts/fetchSchema.js
   ```
   - **Requires**: Valid BEARER_TOKEN and network access to api.travelgate.com
   - **Output**: Saves schema to `src/graphql/schema-json/inventory-schema.json`

2. **Update documentation files**:
   ```bash
   node src/graphql/scripts/updateDocs.js
   ```
   - **Requires**: Existing schema JSON file
   - **Function**: Automatically updates .mdx files with GraphQL documentation
   - **Mapping**: Uses `src/graphql/node-map/fileNodeMap.js` for file mapping

### MDX File Structure for GraphQL Documentation
For GraphQL automation to work correctly, .mdx files MUST contain:
```markdown
## Examples
```
- **Critical**: Documentation is inserted BEFORE this section
- **Without this**: Documentation appends to end of file

## Common Issues and Solutions

### Build Problems
- **"Docs version has no docs"**: Run `npx docusaurus graphql-to-doc --force` and copy sidebar schema
- **"Cannot find module sidebar-schema.js"**: Run `cp api-sidebar-schema.dist api/sidebar-schema.js`
- **Broken links error**: Normal with incomplete schemas; full schema fixes this
- **Memory issues**: Use `NODE_OPTIONS="--max_old_space_size=4096"`

### Schema Generation Problems
- **"fetch failed"**: Requires TRAVELGATE_API_KEY and network access to api.travelgate.com
- **"ENOTFOUND api.travelgate.com"**: Network restriction in sandboxed environments
- **Workaround**: Use existing schema files or create minimal test schema

### Development Server Issues
- **Port 4200 in use**: Kill existing process or use different port
- **Slow startup**: Wait at least 2-3 minutes before considering failure
- **Build cache issues**: Run `npm run clear` first

## Repository Structure and Navigation

### Key Directories
- **`docs/`**: Main documentation content
  - `docs/apis/`: API-specific documentation
  - `docs/get-started/`: Getting started guides
- **`api/`**: Generated GraphQL API reference (do not edit manually)
- **`kb/`**: Knowledge base content
- **`src/`**: Source code and components
  - `src/graphql/`: GraphQL automation scripts and samples
  - `src/components/`: Reusable React components
  - `src/scss/`: Styling
- **`schemas/`**: GraphQL schema files
- **`scripts/`**: Build and automation scripts

### Important Files
- **`docusaurus.config.js`**: Main configuration
- **`package.json`**: Dependencies and scripts
- **`api-sidebar-schema.dist`**: Template for API sidebar
- **`sidebars.js`**, **`sidebarsApi.js`**, **`sidebarsKb.js`**: Navigation configuration

### Do Not Edit
- **`api/*`**: Generated content (except sidebar-schema.js)
- **`build/`**: Build output
- **`.docusaurus/`**: Cache directory
- **`node_modules/`**: Dependencies

## Build Times and Timeouts

Based on validated measurements:
- **npm install**: ~2 minutes → Set timeout to 5+ minutes
- **npm run build**: ~67 seconds → Set timeout to 10+ minutes  
- **npx docusaurus graphql-to-doc**: ~2 seconds → Set timeout to 3+ minutes
- **npm run generate-schema**: ~10 seconds → Set timeout to 3+ minutes
- **npx docusaurus-mdx-checker**: ~5-10 seconds → Set timeout to 5+ minutes

**NEVER CANCEL ANY COMMAND. Always wait for completion or timeout.**

## Additional Documentation Generation

### PDF Export (Optional)
```bash
# Requires development server running
./docs-to-pdf.sh
```
- **Note**: May require additional dependencies
- **Purpose**: Export knowledge base to PDF format