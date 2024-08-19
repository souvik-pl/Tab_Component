# React Tab Component

The `Tab` and `TabList` components provide a flexible and accessible way to implement tabbed navigation in your React application. These components support both mouse and keyboard interactions, ensuring a seamless user experience.

## Usage

To use the `Tab` and `TabList` components, import them and include them in your JSX code as shown below:

```typescript
import React from 'react';
import { Tab, TabList } from './path-to-your-component/Tabs';

const TAB_LIST = [
  { label: 'Tab 1' },
  { label: 'Tab 2' },
  { label: 'Tab 3' },
  { label: 'Tab 4' },
  { label: 'Tab 5' },
  { label: 'Tab 6' },
];

function App() {
  function selectionHandler(index: number) {
    console.log('Selected Tab:', index + 1);
  }

  return (
    <div>
      <TabList onChange={selectionHandler}>
        {TAB_LIST.map((tab, index) => (
          <Tab key={index} label={tab.label} value={index} />
        ))}
      </TabList>
    </div>
  );
}

export default App;
```

## Components

### `TabList`

The `TabList` component wraps multiple `Tab` components and manages the tab navigation. It supports both mouse and keyboard interactions.

#### Props

1. `onChange: (index: number) => void`

   - **Description:** A callback function that is triggered when the user selects a tab. The function receives the index of the selected tab.
   - **Required**: `true`

2. `children: JSX.Element[]`

   - **Description:** The Tab components to be rendered inside the TabList.
   - **Required:** `true`

3. `width?: string`

   - **Description:** Optional width for the TabList container.

4. `height?: string`
   - **Description:** Optional height for the TabList container.

### `Tab`

The `Tab` component represents an individual tab that can be clicked or selected via keyboard navigation.

#### Props

1. `value: any`

   - **Description:** The value associated with the tab, typically an index or identifier.
   - **Required**: `true`

2. `label: string`

   - **Description:** The label displayed on the tab.
   - **Required:** `true`

3. `icon?: JSX.Element`

   - **Description:** An optional icon to display alongside the label.

## Keyboard Navigation

The `Tab` and `TabList` components support the following keyboard interactions:

- **ArrowRight:** Moves focus to the next tab.
- **ArrowLeft:** Moves focus to the previous tab.
- **Home:** Moves focus to the first tab.
- **End:** Moves focus to the last tab.
- **Enter:** Selects the focused tab.
- **Space:** Selects the focused tab.
