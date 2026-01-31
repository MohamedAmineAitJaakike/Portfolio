import os

components_dir = r"c:\Users\ASUS\Desktop\potofolio\src\components"

# Fix the easing functions
replacements = [
    ('ease: "easeOut"', 'ease: "easeOut"'),  # This will be handled by the motion.js settings
    ('ease: "easeInOut"', 'ease: "easeInOut"'),
]

# More comprehensive - let's just remove the ease property and add proper config
for filename in os.listdir(components_dir):
    if filename.endswith(".tsx"):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        # Remove the problematic ease properties
        content = content.replace('transition: { duration: 0.8, ease: "easeOut" }', 'transition: { duration: 0.8 }')
        content = content.replace('transition: { duration: 1, ease: "easeOut" }', 'transition: { duration: 1 }')
        content = content.replace(', ease: "easeOut"', '')
        content = content.replace(', ease: "easeInOut"', '')
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed animations in {filename}")

print("Done fixing animations!")
