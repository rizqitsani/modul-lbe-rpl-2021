import ChildrenProps from './components/ChildrenProps';
import ClassComponent from './components/ClassComponent';
import ConditionalRendering from './components/ConditionalRendering';
import CssModule from './components/CssModule';
import EventHandling from './components/EventHandling';
import FormHandling from './components/FormHandling';
import FunctionalComponent from './components/FunctionalComponent';
import ListRendering from './components/ListRendering';
import NestedCreateElement from './components/NestedCreateElement';
import NestedJsx from './components/NestedJsx';
import ObjectState from './components/ObjectState';
import Props from './components/Props';
import RegularCss from './components/RegularCss';
import SimpleCreateElement from './components/SimpleCreateElement';
import SimpleJsx from './components/SimpleJsx';
import State from './components/State';
import StyleProps from './components/StyleProps';

function App() {
  return (
    <main className='layout'>
      <h1 style={{ textAlign: 'center' }}>Hands On Modul 2</h1>

      <ClassComponent />
      <FunctionalComponent />
      <SimpleCreateElement />
      <NestedCreateElement />
      <SimpleJsx />
      <NestedJsx />
      <Props name='Wisnu' hobby='code' />
      <ChildrenProps>Selamat malam!</ChildrenProps>
      <ConditionalRendering />
      <ListRendering />
      <StyleProps>Inline styling!!</StyleProps>
      <RegularCss>Regular CSS</RegularCss>
      <CssModule>CSS Module🔥</CssModule>
      <EventHandling />
      <State />
      <ObjectState />
      <FormHandling />
    </main>
  );
}

export default App;
