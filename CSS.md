# Pet Adoption Finder CSS

## Global Reset & Box Model
```css
*{
    margin: 0 auto;
    padding: auto;
}
```

## Organized CSS Structure
```css
/* Universal Styling*/
```

## Typography Styling
```css
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
```
## Color Scheme & Contrast
```css
background-color: #e0dcdc;
color: rgb(11, 34, 11);
```

## Flexbox/Grid Usage
```csss
display: flex;
flex-direction: row;
padding-top:5px ;
flex-wrap: wrap;
```

## Button & Input Styling
```Css
.adopt:hover{
    cursor: pointer;
}
```

## Component Reusablity 
```css
h1, p{
    color: rgb(33, 45, 67);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 5px;
}
```

## Hover/Focus Effects
```css
.adopt:hover{
    cursor: pointer;
}
```

## Layout Containers
```css
#resultsContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap:25px;
    column-gap:10px;
    margin-top:20px;
}
```