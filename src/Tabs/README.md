---
title: 'Tabs'
type: 'component'
categories:
- Navigation
status: 'Stable'
designStatus: 'Done'
devStatus: 'TO DO'
notes: |
  TODO: Remove subcomponent of deprecated implementation soon
---

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/cards/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Uncontrolled usage

```jsx live
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

### Controlled usage

```jsx live
() => {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        Hello I am the first panel.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Hello I am the second panel.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Hello I am third first panel.
      </Tab>
    </Tabs>
  );
}
```

### Button group usage

```jsx live
<Tabs
  defaultActiveKey="profile"
  id="uncontrolled-pills-tab-example"
  variant="button-group"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

### Pills usage

```jsx live
<Tabs
  defaultActiveKey="profile"
  id="uncontrolled-pills-tab-example"
  variant="pills"
>
  <Tab eventKey="home" title="Home">
    Hello I am the first panel.
  </Tab>
  <Tab eventKey="profile" title="Profile">
    Hello I am the second panel.
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    Hello I am third first panel.
  </Tab>
</Tabs>
```

***

## Tabs.Deprecated

<br/>

### Basic usage

```jsx live
<Tabs.Deprecated
  labels={[
    'Panel 1',
    'Panel 2',
    'Panel 3'
  ]}
>
  <div>Hello I am the first panel</div>
  <div>Hello I am the second panel</div>
  <div>Hello I am the third panel</div>
</Tabs.Deprecated>
```
