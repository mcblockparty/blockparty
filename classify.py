import re

def hex_to_hsl(hex_code):
    hex_code = hex_code.lstrip('#')
    r, g, b = [int(hex_code[i:i+2], 16) / 255.0 for i in (0, 2, 4)]
    mx, mn = max(r, g, b), min(r, g, b)
    l = (mx + mn) / 2
    if mx == mn:
        h = s = 0.0
    else:
        d = mx - mn
        s = d / (2 - mx - mn) if l > 0.5 else d / (mx + mn)
        if mx == r:
            h = ((g - b) / d) % 6
        elif mx == g:
            h = (b - r) / d + 2
        else:
            h = (r - g) / d + 4
        h *= 60
    return h, s * 100, l * 100

def classify(hex_code):
    h, s, l = hex_to_hsl(hex_code)

    # Achromatic (grey scale) - dark tones get a wider saturation allowance
    # since warm-toned darks (e.g. "Charcoal") still read as grey/black, not brown
    if s <= 18 or (l < 32 and s <= 22):
        if l >= 88:
            return ["neutral"]
        elif l <= 20:
            return ["black"]
        else:
            return ["grey"]

    # Warm hues - split into red-orange band and yellow band, since dark
    # desaturated red-orange reads as "brown" but dark yellow still reads as "yellow"/olive
    if h < 45 or h >= 345:
        if s < 35:
            return ["beige"] if l >= 55 else ["brown"]
        else:
            return ["brown"] if l < 45 else ["orange"]
    if h < 70:
        if s < 35:
            return ["beige"] if l >= 55 else ["brown"]
        else:
            return ["yellow"]

    # Cool hues
    if h < 170:
        return ["green"]
    elif h < 260:
        return ["blue"]
    elif h < 310:
        return ["purple"]
    else:
        # magenta/pink range: light reads as pink (rose/blush), dark reads as purple (eggplant/plum)
        return ["pink"] if l >= 50 else ["purple"]

if __name__ == "__main__":
    samples = {
        "Grass Green": "#8fa051", "Lime": "#BEAF59", "Lemon": "#BBA622",
        "Orange": "#D89118", "Brownstone": "#89837A", "Dark Grey": "#575042",
        "Sandstone": "#B6A991", "Light Grey": "#B4B2AE", "Dark Charcoal": "#4D4D4A",
        "Mauve Grey": "#786663", "Mossy Green": "#718E28", "White": "#D2D1D0",
        "Silver": "#D0C8BA", "Khaki": "#AB9878", "Camel": "#A89273",
        "Oak Brown": "#977051", "Brown": "#8E5935", "Russet": "#864B35",
        "Mocha": "#654A39", "Charcoal": "#46372E", "Medium Gray": "#797467",
    }
    for name, hexv in samples.items():
        print(f"{name:15s} {hexv}  ->  {classify(hexv)}")
