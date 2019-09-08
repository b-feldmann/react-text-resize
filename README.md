Component that resizes font-size of children to fit the parent container.

> _Supports Typescript_ 
 
#### Examples

```
    <TextResize defaultFontSize={26}>
        <p>Lorem Ipsum...</p>
    </TextResize>

    <TextResize defaultFontSize={26}>
        Lorem Ipsum...
    </TextResize>

    <TextResize defaultFontSize={26}>
        Lorem Ipsum...
        <div>Lorem Ipsum...</div>
        <p>Lorem Ipsum...</p>
    </TextResize>

    <TextResize defaultFontSize={26} minFontSize={14} maxFontSize={36}>
        <p>Lorem Ipsum...</p>
    </TextResize>
```

#### React Props

 - defaultFontSize: Starting font size
 - maxFontSize: maximum font size
 - minFontSize: minimum font size
 - className: add some css to the text parent
 
#### Algorithm

Uses binary search to find the right font-size - Blazing fast!  
Uses useRef (React Hooks) to access the components and check the dimension. 