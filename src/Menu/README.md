---
title: 'Menu'
type: 'component'
components:
- Menu
- MenuItem
- SelectMenu
categories:
- Navigation
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### Menu

An arrow-key navigable ``Menu`` which consists of ``MenuItems``. A ``Menu`` can be employed to produce its common variants, including dropdown menus, select menus, and others. ``Menus`` are keyboard navigable with both tab and arrow keys.

### MenuItem

A ``MenuItem`` is its own distinct component that is used by any kind of menu overlays i.e. dropdown menu and navigation menu.

```jsx live
() => {
  return (
    <Menu>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Check}>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as={Hyperlink} href="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        <MenuItem as={Button} variant="tertiary" size="inline">A Button Menu Item</MenuItem>
        <MenuItem as={Form.Checkbox}>A Checkbox Menu Item</MenuItem>
    </Menu>
  );
}
```

A ``Menu`` can include things like forms.

```jsx live
() => {
  return (
    <Form.Group>
      <Form.CheckboxSet
          name="color-two"
          onChange={(e) => console.log(e.target.value)}
          defaultValue={['green']}
        >
        <Form.Label>Which Color?</Form.Label>
        <Menu>
          <MenuItem as = {Form.Checkbox} value="red">Red</MenuItem>
          <MenuItem as = {Form.Checkbox} value="blue">Blue</MenuItem>
          <MenuItem as = {Form.Checkbox} value="green">Green</MenuItem>
          <MenuItem as = {Form.Checkbox} value="yellow">Yellow</MenuItem>
        </Menu>
      </Form.CheckboxSet>
    </Form.Group>
  );
}
```

A ``Menu`` can be implemented to appear inside a `modalpopup` for a wide variety of use cases. The ``Modal`` brings focus to the first menu element upon the click of the trigger, and can be escaped on click away or key press.

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const target = React.useRef(null);
  const [selected, setSelected] = useState('...');

  return (
    <>
    <Badge variant="secondary">I like {selected}</Badge>
      <Button ref={target} variant="primary" size="inline" onClick={open}>Click Me To Pick:</Button>
      <ModalPopup positionRef={target} isOpen={isOpen} onClose={close} style={{
        width: 500, height: 50
      }}>
      <div className="bg-white">
        <Menu>
        <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Beans')}>Beans</MenuItem>
        <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Greens')}>Greens</MenuItem>
        <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Tomatoes')}>Tomatoes</MenuItem>
        <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Potatoes')}>Potatoes</MenuItem>
      </Menu>
      </div>
      </ModalPopup>
    </>
  )
}
```
### SelectMenu

The ``SelectMenu`` component is triggered on the click of a button or your choice of a standalone link using the `isLink` prop, and expands from the center if not close to the edge of the page. The ``Menu`` contains a list of ``MenuItems``, with a white background, and level 2 elevation. The ``Menu`` also remembers the user’s selection and displays it as the label for the button/link trigger.

The ``Modal`` brings focus to the first menu element upon the click of the trigger, and can be escaped on click away or key press. Set a default message with the `defaultMessage` prop string. Use the `defaultSelected` prop to signify that a menuItem is the default to open to.

```jsx live
() => {

  const defaultSelectedRef = React.useRef();
  
  return (
    <div className="mb-2">
        <SelectMenu>
         <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as={Hyperlink} href="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        </SelectMenu>
        <SelectMenu isLink={true} defaultMessage="Choose Your New Best Friend">
        <MenuItem >Falstaff</MenuItem>
          <MenuItem >Scipio</MenuItem>
         <MenuItem defaultSelected>Faustus</MenuItem>
          <MenuItem >Cordelia</MenuItem>
          <MenuItem >Renfrancine</MenuItem>
          <MenuItem >Stovern</MenuItem>
         <MenuItem >Kainian</MenuItem>
          <MenuItem >M. Hortens</MenuItem>
        </SelectMenu>
        </div>
  );
}
```
