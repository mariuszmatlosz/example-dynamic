# Custom Dynamic Block Plugin

## Overview
This WordPress plugin provides a custom dynamic block that allows users to add a block with an editable heading, text, and an image with a link. The block is designed to render the content dynamically using PHP.

## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- [WordPress](https://wordpress.org/) installed locally or on a server

### Step-by-Step Instructions

1. **Open Terminal**

2. **Navigate to the WordPress Plugins Directory**

   `cd /path/to/your/wordpress/wp-content/plugins/`

3. **Clone the Repository**

   `git clone https://github.com/mariuszmatlosz/example-dynamic.git`

4. **Navigate to the Plugin Directory**

   `cd custom-dynamic-block`

5. **Install Dependencies**

   `npm install`

6. **Build the Plugin**

   `npm run build`

7. **Activate the Plugin**

    1. Log in to your WordPress admin dashboard.
    2. Go to Plugins > Installed Plugins.
    3. Find Custom Dynamic Block in the list.
    4. Click Activate.


## Usage

### Adding the Block

1. Open the post or page where you want to add the block.
2. Click the `+` button to add a new block.
3. Search for `Custom Dynamic Block`.
4. Click on the block to add it to your post or page.

### Editing the Block

1. **Heading**: Click on the heading text to edit it directly.
2. **Paragraph Text**: Click on the paragraph text to edit it directly.
3. **Image**: Click on the `Choose Image` button in the block settings panel (on the right) to open the media library and select an image.
4. **Image Link**: Enter the URL you want the image to link to in the provided input field in the block settings panel.

### Rendering

The block dynamically renders the content using PHP to ensure the latest date and time is always displayed in the footer (it's not a clock, it's PHP timestamp).
