import os
import re

components_dir = r"c:\Users\ASUS\Desktop\potofolio\src\components"

# Define replacements
replacements = [
    ("text-text-secondary", "text-slate-300"),
    ("text-text-muted", "text-slate-500"),
    ("text-text\"", "text-slate-100\""),
    ("bg-text\"", "bg-slate-100\""),
    ("hover:text-text \"", "hover:text-slate-100 \""),
    ("hover:text-accent-400", "hover:text-blue-400"),
    ("text-accent-400", "text-blue-400"),
    ("text-accent-500", "text-blue-500"),
    ("border-accent-500", "border-blue-500"),
    ("hover:border-accent-500", "hover:border-blue-500"),
    ("bg-accent-500/10", "bg-blue-500/10"),
    ("bg-accent-500/20", "bg-blue-500/20"),
    ("accent-gradient", "accent-gradient"),  # Keep this as-is since it's in globals.css
    ("hover:bg-surface", "hover:bg-slate-800"),
    ("bg-surface", "bg-slate-800"),
    ("border-white/5", "border-slate-700"),
    ("text-body-sm", "text-sm"),
    ("text-body-md", "text-base"),
    ("text-body-lg", "text-lg"),
    ("text-heading-sm", "text-xl font-semibold"),
    ("text-heading-md", "text-2xl font-semibold"),
    ("text-heading-lg", "text-3xl font-bold"),
    ("text-display-sm", "text-4xl font-bold"),
]

for filename in os.listdir(components_dir):
    if filename.endswith(".tsx"):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        for old, new in replacements:
            content = content.replace(old, new)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated {filename}")
        else:
            print(f"- No changes in {filename}")

print("\nDone!")
