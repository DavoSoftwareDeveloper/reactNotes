import './App.css'
import Square from './components/Square';
import { documentation } from './data/data';
  
  function App() {

    return (
      <div className="app">
        <div className='menu'>

          <b>* KnowHow *</b>
          {documentation.map(category => {
            if ( category.category === "Knowhow") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}

          <b>* Performance *</b>
          {documentation.map(category => {
            if ( category.category === "performance") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}

          <b>* Javascript *</b>
          {documentation.map(category => {
            if ( category.category === "javascript") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}

          <b>* Test *</b>
          {documentation.map(category => {
            if ( category.category === "Test") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}

          <b>* Starter *</b>
          {documentation.map(category => {
            if ( category.category === "Starter") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}
          <b>* CSS *</b>
          {documentation.map(category => {
            if ( category.category === "css") {
              return  <a key={category.id} href={`#${category.name}`}>{category.title}</a>
            }
          })}

        </div>

        <div className='main'>
          {documentation.map(data => {
                  return <Square key={data.id} page={data.name} title={data.title} subtitle={data.subtitle} description={data.description} description2={data.description2} content={data.content} content2={data.content2} photo={data.photo} />
          })}
        </div>
      </div>
    );
  }
  
  export default App;

