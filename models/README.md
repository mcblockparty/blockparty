# Block Party — Models Folder

This folder contains the actual CIT model files served to the download system.

## Folder structure

Each model gets its own subfolder named by model ID:

```
models/
  ssc061/
    ssc061a.json
    ssc061cornera.json
    ssc061a.properties
    ssc061cornera.properties
    ssc61_a.png           ← baked texture (no leading zero in number)

  ssc077/
    ssc077a.json
    ssc077centera.json
    ssc077a.properties
    ssc077centera.properties
    ssc77_a.png
    ssc77_b.png
    ssc77_c.png
    ... (one texture per color variant)
```

## File naming rules

| File type     | Pattern                          | Example              |
|---------------|----------------------------------|----------------------|
| .json model   | `[anvilCode][position][variant].json` | `ssc077centera.json` |
| .properties   | `[anvilCode][position][variant].properties` | `ssc077centera.properties` |
| Baked texture | `ssc[number_no_leading_zero]_[variant].png` | `ssc77_a.png`        |

## Important notes

- The number in the texture filename has **no leading zero** — ssc061 → ssc61_a.png
- All positions for the same variant share ONE texture file
- The .json file's texture path should be: `minecraft:item/[num]/ssc[num]_[variant]`
- The .properties model path should be: `item/[anvilCode][position][variant]`
