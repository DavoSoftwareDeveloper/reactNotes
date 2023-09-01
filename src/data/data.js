    const data = {
    id:0,
    category:"",
    name:"",
    title: "",
    subtitle: "",
    description: "",
    description2:"",
    content: ``,
    content2:``,
}
import table from "../assets/table.png"
import boxshadow from "../assets/boxshadow.png"

 const errorData = {
    id:1,
    category:"Knowhow",
    name:"error",
    title: "Error Boundaries",
    subtitle: "",
    description: "",
    content: `class ErrorBoundary extends React.Component {
      state = {
        hasError: false,
        error: null,
        errorInfo: null
      };
    
      componentDidCatch(error, errorInfo) {
        this.setState({
          hasError: true,
          error: error,
          errorInfo: errorInfo
        });
        // Aquí puedes registrar el error o realizar cualquier otra acción
      }
    
      render() {
        if (this.state.hasError) {
          return (
            <div>
              <h2>Oops, algo salió mal.</h2>
              <p>Lo sentimos, se produjo un error en este componente.</p>
            </div>
          );
        }
        return this.props.children;
      }
    }
    
    // Uso del error boundary
    <ErrorBoundary>
      <ComponenteConPosibleError />
    </ErrorBoundary>`
}
 const noReRender = {
    id:2,
    category:"Knowhow",
    name:"norerender",
    title: "Memo",
    subtitle: "Sustituye los pureComponents que había antes con las clases",
    description: "React.memo es un Higher-Order Component (HOC) que envuelve un componente funcional y lo memoriza, evitando su renderizado si las props no han cambiado.",
    content: `const MyComponent = React.memo(({ count }) => {
        return <p>Count: {count}</p>;
      });
      
      export default MyComponent;`
}
 const portal = {
  id:3,
  category:"Knowhow",
  name:"portal",
    title: "Portales",
    subtitle: "Componente modal con nodo ya creado",
    description: "Asegúrate de crear en tu archivo html el nodo correspondiente",
    content: `import React from 'react';
    import ReactDOM from 'react-dom';
    
    function Modal({ isOpen, onClose, title, content }) {
      if (!isOpen) {
        return null;
      }
    
      return ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>,
        document.getElementById('modal-root') // Nodo en el que se renderizará el portal
      );
    }
    
    export default Modal;`,
    content2: `import React, { useState } from 'react';
    import Modal from './Modal';
    
    function App() {
      const [showModal, setShowModal] = useState(false);
    
      const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={showModal}
            onClose={closeModal}
            title="Modal Title"
            content="This is the modal content."
          />
        </div>
      );
    }
    
    export default App;`
}
 const portal2 = {
  id:4,
  category:"Knowhow",
  name:"portal2",
    title: "Portales",
    subtitle: "Componente modal creando nodo",
    description: "Podría ralentizar la app si se usa muy a menudo.",
    content: `import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    
    function Modal({ isOpen, onClose, title, content }) {
      if (!isOpen) {
        return null;
      }
    
      const modalRoot = document.createElement('div'); // Crea un nuevo nodo en cada renderizado
      modalRoot.classList.add('modal-root');
      document.body.appendChild(modalRoot);
    
      return ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => { document.body.removeChild(modalRoot); onClose(); }}>
              Close
            </button>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>,
        modalRoot
      );
    }
    
    function App() {
      const [showModal, setShowModal] = useState(false);
    
      const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={showModal}
            onClose={closeModal}
            title="Modal Title"
            content="This is the modal content."
          />
        </div>
      );
    }
    
    export default App;
    `,
    content2:""
}
 const portal3 = {
  id:5,
  category:"Knowhow",
  name:"portal3",
    title: "Portales",
    subtitle: "Componente modal-wrap creando nodo",
    description: "Puede usarse para distintas cosas según children",
    content: `import React, { useEffect, useState } from 'react';
    import ReactDOM from 'react-dom';
    
    function Modal({ children }) {
      const portalNode = document.createElement('div');
    
      useEffect(() => {
        document.body.appendChild(portalNode);
    
        return () => {
          portalNode.remove();
        };
      }, [portalNode]);
    
      return ReactDOM.createPortal(children, portalNode);
    }
    
    function App() {
      const [showModal, setShowModal] = useState(false);
    
      const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal>
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
                <h2>Modal Title</h2>
                <p>This is the modal content.</p>
              </div>
            </div>
          </Modal>
        </div>
      );
    }
    
    export default App;`,
    content2:``,
}
 const scrollEl = {
  id:6,
  category:"Knowhow",
  name:"scrollEl",
    title: "Scroll elements",
    subtitle: "",
    description: "",
    content: `     window.addEventListener("scroll", function(){
        const title = document.getElementById("title");
        const parraf = document.getElementById(“parraf");

        const value = window.scrollY;

        title.style.transform = translateX(-\${value * 0.25}px);
        parraf.style.transform = translateX(\${value * 0.55}px);

} )



return (
  <div className="title" id="title"> Hi! I'm <span className="border-text">Davo</span>, software <span className="border-text">developer</span> </div>

            <p className="text-top" id="parraf">Passionate about technology and art,<br>
              </br> I am totally engaged to the project development process. From the initial idea, I identify the fundamental components needed to achieve the desired goals and develop a satisfactory solution.<br>
              </br> As a full-stack developer, I am devoted to both design and efficiency.</p>
      </div>`,
    content2:``,
}
 const id = {
  id:7,
  category:"Knowhow",
  name:"id",
    title: "id",
    subtitle: "",
    description: "",
    content: `  const generateUniqueId = () => {
        const timestamp = Date.now()
        const randomNumber = Math.random()
        const hexadecimalString = randomNumber.toString(16)
  
        return id-\${timestamp}-\${hexadecimalString}
    }`,
    content2:``,
}
 const dinamicImport = {
  id:8,
  category:"Knowhow",
  name:"dinamicImport",
    title: "Dinamic Import",
    subtitle: "",
    description: "",
    content: `  useEffect(()=>{
        if(currentMode === 'Dark'){  import ('../styles/tailwind-dark.css')}
      },[currentMode])`,
    content2:``,
}
 const fadeIn = {
  id:9,
  category:"Knowhow",
  name:"fadeIn",
    title: "Fade-In",
    subtitle: "",
    description: "",
    content: `import React, { useState, useEffect } from 'react';
    import './FadeInAnimation.css'; // Importa el archivo de estilos
    
    function FadeInAnimation() {
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        // Simulamos el inicio de la animación después de un breve retraso
        const timeoutId = setTimeout(() => {
          setVisible(true);
        }, 500);
    
        return () => clearTimeout(timeoutId); // Limpia el temporizador al desmontar
      }, []);
    
      return (
        <div className={\`fade-in \${visible ? 'visible' : ''}\`}>
          <h1>Fade In Animation</h1>
          <p>This content will fade in when the component mounts.</p>
        </div>
      );
    }
    
    export default FadeInAnimation;`,
    content2:`.fade-in {
        opacity: 0; /* Comienza con opacidad cero */
        transform: translateY(20px); /* Comienza ligeramente desplazado hacia abajo */
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Aplica transiciones a la opacidad y transformación */
      }
      
      .fade-in.visible {
        opacity: 1; /* Opacidad completa cuando la clase "visible" está presente */
        transform: translateY(0); /* Sin desplazamiento vertical cuando visible */
      }`,
}
 const hideShow = {
  id:10,
  category:"Knowhow",
  name:"hideShow",
    title: "Hide & Show",
    subtitle: "",
    description: "",
    content: `  const dropDownClass = search ? "show" : null
    // necesita aprovechar un state bool o crear uno para la ocasión y colocar la variable dropDownClass en el Classname del elemento.
    
    // con bootstrap no hay que añadir estilos, sin el “show” debe ser detallado y el elemento deberá estar en opacity: 0`,
    content2:``,
}
 const slide = {
  id:11,
  category:"Knowhow",
  name:"slide",
    title: "Slide",
    subtitle: "",
    description: "",
    content: `const [currentSlide, setCurrentSlide] = useState(0)


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1)
      }
  
    return (
      <div className="header">
        <div>
          <div className='metal'></div>
          <div style={{transform:\`translateX(-\${currentSlide * 100}vw)\`}} className="container-slide">
              <img className="image-slide" src={foto} alt='imgOne' loading='priority'/>
              <img className="image-slide" src={foto4} alt='imgTwo' loading='priority'/>
              <img className="image-slide" src={foto5} alt='imgThree' loading='priority'/>
          </div>`,
    content2:``,
}
 const tables = {
  id:12,
  category:"Knowhow",
  name:"tables",
    title: "Tables",
    subtitle: "",
    description: "",
    content: `import React from 'react';
    import './Table.css'; // Importa el archivo de estilos
    
    function Table({ data }) {
      return (
          <table className="table">
            <caption>Título de la tabla</caption>
            <colgroup>
            <col style={{ width: '10%' }} /> {/* Columna ID */}
            <col style={{ width: '40%' }} /> {/* Columna Name */}
            <col style={{ width: '20%' }} /> {/* Columna Age */}
          </colgroup>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
            <tfoot >
            <tr>
              <td colSpan="3" className="table-footer">Footer Total rows: {data.length}</td>
            </tr>
            </tfoot>
          </table>
    
      );
    }
      Table.propTypes = {
        data: PropTypes.arrayOf(PropTypes.object)
    };
      Table.displayName = "Table"
    
    
    function App() {
      const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 28 }
      ];
    
      return (
        <div className="app">
          <h1>Table Example</h1>
          <Table data={data} />
        </div>
      );
    }
    
    export default App;`,
    content2:`.app {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 2rem;
      }
      
      .table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 1rem;
        border: 1px solid #ddd;
      }
      
      .table th, .table td {
        border: 1px solid #ddd;
        padding: 8px;
      }
      
      .table th {
        background-color: #f2f2f2;
      }
      
      .table tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      
      .table tr:hover {
        background-color: #ddd;
      }
      
        caption{
          text-align: center;
          padding: 8px;
          font-weight: bold;
          border: none;
        }
        .table-footer {
          text-align: center;
          padding: 8px;
          font-weight: bold;
        }
        .table-footer-end {
          margin-top: 1rem;
          font-size: smaller;
        }`,
        photo: table
}
 const ServiceWorkers = {
  id:13,
  category:"performance",
  name:"serviceWorkers",
    title: "Service Worker",
    subtitle: "",
    description: `Service Worker para el almacenamiento en caché y la gestión de eventos sin conexión:
    El Service Worker es una característica clave de las PWAs que permite interceptar y controlar las solicitudes de red de una aplicación web. Con él, puedes implementar estrategias de almacenamiento en caché para que la aplicación funcione sin conexión o en redes intermitentes.`,
    content: `// Instalación del Service Worker
    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open('my-cache').then(cache => {
          return cache.addAll([
            '/',
            '/index.html',
            '/styles.css',
            '/app.js',
            // ... agregar aquí los recursos que quieres almacenar en caché
          ]);
        })
      );
    });
    
    // Intercepta las solicitudes de red y busca en la caché primero
    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request);
        })
      );
    });`,
    content2:``,
}
 const websockets = {
  id:14,
  category:"performance",
  name:"websockets",
    title: "Websockets",
    subtitle: "",
    description: "",
    content: `
    import {io} from "socket.io-client";

    const socket = io("https://tandasapp.onrender.com", {transports: ['websocket']});
    
    socket.on("receive", (data) =>{
        console.log(\`this is the new socketCount: \${data}\`)
        setSocketCount(data)
      })

    socket.emit("stopApp", "hello stopApp")
    `,
    content2:`const io = new Server(server,{
        cors: {
            origin: "https://tandas-frontend.onrender.com",
            methods: ["GET", "POST"]
        }
    });
    io.on("connection", (socket) => {
        console.log("A user connected");
      
      
        socket.on(("nextRound"), (arg) => {
          console.log(arg);
          io.emit("receive", obj.counter);
        });
      
      
        socket.on(("stopApp"), (arg) => {
          console.log(arg);
          stopAppFunc()
          io.emit("receive-stopApp", obj.stopApp);
        });
      
      
        
        socket.on('disconnect', () => {
          console.log('Usuario desconectado');
        });
      });
      `,
}
 const Improve= {
  id:15,
  category:"performance",
  name:"improve",
    title: "useMemo",
    subtitle: "useMemo",
    description: "Optimización de renderizado: Utilizar técnicas como la memoización de componentes con React.memo, useMemo y useCallback para evitar renderizados innecesarios y cálculos repetitivos. Esto asegura que los componentes solo se actualicen cuando sea necesario y evita una carga excesiva en la interfaz de usuario.",
    content: `import React, { useMemo } from 'react';

    const ExpensiveComponent = ({ data }) => {
      // Utilizar useMemo para memoizar el resultado del cálculo costoso
      const expensiveResult = useMemo(() => {
        // Realizar cálculos costosos aquí
        return data.reduce((sum, item) => sum + item.value, 0);
      }, [data]);
    
      return <div>{expensiveResult}</div>;
    };`,
    content2:``,
}
 const Improve2= {
  id:16,
  category:"performance",
  name:"improve2",
    title: "Lazy Loading",
    subtitle: "Lazy",
    description: "Code Splitting: Aplicar la técnica de code splitting para dividir el código en fragmentos más pequeños y cargarlos de forma diferida cuando sea necesario. Esto mejora el tiempo de carga inicial de la aplicación y permite que los usuarios vean y utilicen la funcionalidad principal más rápidamente.",
    content: `import React, { lazy, Suspense } from 'react';

    const LazyComponent = lazy(() => import('./LazyComponent'));
    
    const App = () => {
      return (
        <div>
          <Suspense fallback={<div>Cargando...</div>}>
            <LazyComponent />
          </Suspense>
        </div>
      );
    };`,
    content2:``,
}
 const eslint = {
  id:17,
  category:"Starter",
  name:"eslint",
    title: "Eslint",
    subtitle: "vite (automático) // .eslintrc.cjs",
    description: "",
    content: `// eslint-disable-next-line no-undef
    module.exports = {
      env: { browser: true, es2020: true },
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      settings: { react: { version: '18.2' } },
      plugins: ['react-refresh'],
      rules: {
        'react-refresh/only-export-components': ‘warn',
        "react/prop-types": [disabled] -->**
      },
    }
    
  -->**  Child.propTypes = {
        onClickParent: PropTypes.func,
        clickChild: PropTypes.bool,
    };
    
    Child.displayName = "Child"`,
    content2:`
    npm i "eslint": "^8.38.0"
    npm i "eslint-plugin-react": "^7.32.2"
    npm i "eslint-plugin-react-hooks": "^4.6.0"
    npm i "eslint-plugin-react-refresh": "^0.3.4"
    `,
}
 const webpack = {
  id:18,
  category:"Starter",
  name:"webpack",
    title: "Webpack",
    subtitle: "entry, output, plugins, module, resolve",
    description: "",
    content: `module.exports = {
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js',
            clean: true,
        },
        plugins: [
            new WebHTMLWebpackPlugin ({
                template: './src/index.html'
            }),
            new ESLintPlugin()
        ],
        module: {
            rules: [
                BabelRule,
                CSSRule,
                ImageRule,
                TypescriptRule,
            ]
        },
        resolve:{
            extensions:['.tsx', '.ts', '.jsx', '.js']
        }
    }
    
    const ImageRule = {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    const CSSRule = {
        test: /\\.css$/,
        use: [
            'style-loader', 
            'css-loader',
            'sass-loader'
        ]
    }

    const TypescriptRule = {
        test: /\\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
    }

    const BabelRule = {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env'], --> **
                    ['@babel/preset-react', {
                        runtime: 'automatic'
                    } ]
                ]
            }
        }
    }
    
   ---> ** module.exports = {
        presets: ["@babel/preset-env", "@babel/preset-react"]
    }
    `,
    content2:`
    npm

  "devDependencies": {

    "sass": “^1.62.1”,

    "@babel/core": "^7.21.8",
    "@babel/preset-env": "^7.21.5",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": “^7.21.5",

    "@types/react": "^18.2.4",
    "@types/react-dom": "^18.2.3",

    "eslint": "^8.39.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-webpack-plugin": “^4.0.1",

    "html-webpack-plugin": "^5.5.1",

    "babel-loader": "^9.1.2",
    "css-loader": “^6.7.3”,
    "sass-loader": "^13.2.2",
    "style-loader": "^3.3.2",
    "ts-loader": “^9.4.2",

    "webpack": "^5.82.0",
    "webpack-cli": "^5.0.2",
    "webpack-dev-server": "^4.13.3"
  }

    [ t ]  npm init -y
    [ t ]  npm install -D webpack webpack-cli webpack-dev-server
    [ t ]  npm install react react-dom
    [ t ]  npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
    [ t ]  npm i -D html-webpack-plugin
    
    "scripts": {
        "start": "webpack-dev-server --mode development --open --hot",
        "build": "webpack --mode production"
      }
    `,
}
 const jest = {
  id:19,
  category:"Test",
  name:"jest",
    title: "Jest",
    subtitle: "",
    description: "",
    content: `// api.js

    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    }
    
    module.exports = fetchData;`,
    content2:`// api.test.js

    const fetchData = require('./api');
    
    test('fetchData should return mocked data', async () => {
      const mockData = { foo: 'bar' };
    
      // Mock the fetch function
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
      });
    
      const data = await fetchData();
    
      expect(data).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
    });`,
}
 const testing = {
  id:20,
  category:"Test",
  name:"testing",
    title: "Jest & Testing Library",
    subtitle: "",
    description: "",
    content: `// UserData.js

    import React, { useState, useEffect } from 'react';
    import { getUserData } from './api';
    
    function UserData() {
      const [userData, setUserData] = useState(null);
    
      useEffect(() => {
        getUserData().then((data) => setUserData(data));
      }, []);
    
      return (
        <div>
          {userData ? (
            <div>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
    
    export default UserData;`,
    content2:`// UserData.test.js

    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import UserData from './UserData';
    import { getUserData } from './api';
    
    jest.mock('./api');
    
    test('UserData component renders user data', async () => {
      const mockUserData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
    
      getUserData.mockResolvedValue(mockUserData);
    
      render(<UserData />);
    
      const loadingElement = screen.getByText(/Loading/i);
      expect(loadingElement).toBeInTheDocument();
    
      const nameElement = await screen.findByText(/Name:/i);
      const emailElement = await screen.findByText(/Email:/i);
    
      expect(nameElement.textContent).toBe('Name: John Doe');
      expect(emailElement.textContent).toBe('Email: john.doe@example.com');
    });`,
}
 const testRedux = {
  id:21,
  category:"Test",
  name:"testRedux",
    title: "Test Redux",
    subtitle: "",
    description: "",
    content: `
// counterReducer.js

    const initialState = {
      count: 0,
    };
    
    const counterReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { ...state, count: state.count + 1 };
        case 'DECREMENT':
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    };
    
    export default counterReducer;
    
// store.js

import { createStore } from 'redux';
import counterReducer from './counterReducer';

const store = createStore(counterReducer);

export default store;

// Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
    `,
    content2:`
    // Counter.test.js

    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import { Provider } from 'react-redux';
    import store from './store';
    import Counter from './Counter';
    
    test('counter increments and decrements correctly', () => {
      const { getByText } = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    
      const countElement = getByText(/Count:/i);
      expect(countElement.textContent).toBe('Count: 0');
    
      const incrementButton = getByText(/Increment/i);
      const decrementButton = getByText(/Decrement/i);
    
      fireEvent.click(incrementButton);
      expect(countElement.textContent).toBe('Count: 1');
    
      fireEvent.click(decrementButton);
      expect(countElement.textContent).toBe('Count: 0');
    });`,
}
 const testRouter = {
  id:22,
  category:"Test",
  name:"testRouter",
    title: "Test Router",
    subtitle: "",
    description: "",
    content: `// App.js

    import React from 'react';
    import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    
    function App() {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
    
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      );
    }
    
    export default App;`,
    content2:`// App.test.js

    import React from 'react';
    import { render, screen, fireEvent } from '@testing-library/react';
    import { BrowserRouter as Router } from 'react-router-dom';
    import App from './App';
    
    test('navigates to About page when clicking on About link', () => {
      render(
        <Router>
          <App />
        </Router>
      );
    
      // Verificar que se muestra el enlace a la página de inicio
      const homeLink = screen.getByText(/Home/i);
      expect(homeLink).toBeInTheDocument();
    
      // Verificar que se muestra el enlace a la página de About
      const aboutLink = screen.getByText(/About/i);
      expect(aboutLink).toBeInTheDocument();
    
      // Simular hacer clic en el enlace de About
      fireEvent.click(aboutLink);
    
      // Verificar que la URL ha cambiado a /about
      expect(window.location.pathname).toBe('/about');
    
      // Verificar que el componente About se ha renderizado
      const aboutPage = screen.getByText(/This is the About page/i);
      expect(aboutPage).toBeInTheDocument();
    });`,
}
 const testContext = {
  id:23,
  category:"Test",
  name:"testContext",
    title: "Test Context",
    subtitle: "",
    description: "",
    content: `// ThemeContext.js

    import { createContext, useContext, useState } from 'react';
    
    const ThemeContext = createContext();
    
    export const useTheme = () => useContext(ThemeContext);
    
    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    `,
    content2:`
    // ThemeContext.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

test('toggleTheme changes theme in context', () => {
  const TestComponent = () => {
    const { theme, toggleTheme } = useTheme();
    return (
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  const themeElement = screen.getByText(/Current Theme:/i);
  expect(themeElement.textContent).toBe('Current Theme: light');

  const toggleButton = screen.getByText(/Toggle Theme/i);
  fireEvent.click(toggleButton);

  expect(themeElement.textContent).toBe('Current Theme: dark');
});`,
}
 const integrationTest = {
  id:24,
  category:"Test",
  name:"integrationTest",
    title: "Integration Tests",
    subtitle: "",
    description: "",
    content: `// Counter.js

    import React, { useState } from 'react';
    import Button from './Button';
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      const handleIncrement = () => {
        setCount(count + 1);
      };
    
      return (
        <div>
          <p>Count: {count}</p>
          <Button onClick={handleIncrement} />
        </div>
      );
    }
    
    export default Counter;	
    
    // Button.js

import React from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}

export default Button;
    `,
    content2:`// integration.test.js

    import React from 'react';
    import { render, screen, fireEvent } from '@testing-library/react';
    import Counter from './Counter';
    
    test('counter increments when button is clicked', () => {
      render(<Counter />);
    
      const countElement = screen.getByText(/Count:/i);
      expect(countElement.textContent).toBe('Count: 0');
    
      const incrementButton = screen.getByText(/Increment/i);
    
      fireEvent.click(incrementButton);
      expect(countElement.textContent).toBe('Count: 1');
    
      fireEvent.click(incrementButton);
      expect(countElement.textContent).toBe('Count: 2');
    });`,
}
 const spy = {
  id:25,
  category:"Test",
  name:"spy",
    title: "Spy",
    subtitle: "",
    description: "Se simula la llamada, los datos que introducimos han de ser los esperados por la función fuera del test.",
    content: `// api.js

    async function fetchDataFromAPI() {
      // Llamada a la API real para obtener datos
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    }
    
    // app.js
    async function processData() {
      const data = await fetchDataFromAPI();
      // Realiza alguna operación con los datos recibidos de la API
      return data.length;
    }
    
    // userAPI.js

  export async function fetchUserData(userId) {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`);
  const userData = await response.json();
  return userData;
}

// userActions.js
import { fetchUserData } from './userAPI';

export async function processUserData(userId) {
  const userData = await fetchUserData(userId);
  // Realiza alguna acción basada en los datos del usuario
  return userData;
}
    `,
    content2:`// app.test.js

    import { fetchDataFromAPI } from './api';
    import processData from './app';
    
    // Crear un Spy en fetchDataFromAPI
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]),
    });
    
    test('processData should fetch data from API and return the length', async () => {
      const result = await processData();
      
      // Verificar que fetchDataFromAPI fue llamada correctamente
      expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data');
    
      // Verificar el resultado de processData
      expect(result).toBe(2);
    });
    
    // userActions.test.js

import { fetchUserData, processUserData } from './userActions';

// Creamos un Spy en la función fetchUserData
jest.spyOn(global, 'fetch').mockResolvedValue({
  json: () => Promise.resolve({ id: 1, name: 'John' }),
});

test('processUserData should fetch user data correctly', async () => {
  const userId = 1;
  const userData = await processUserData(userId);

  // Verificamos que fetchUserData fue llamada correctamente con el ID de usuario esperado
  expect(global.fetch).toHaveBeenCalledWith(\`https://api.example.com/users/\${userId}\`);

  // Verificamos que processUserData devuelve los datos del usuario obtenidos de fetchUserData
  expect(userData).toEqual({ id: 1, name: 'John' });
});
    `,
}
 const mock = {
  id:26,
  category:"Test",
  name:"mock",
    title: "Mock",
    subtitle: "",
    description: "Se simula toda la función, los datos que introducimos pueden ser los que queramos. Si el resultado de la función puede tener diferentes comportamientos en el return : succeed, failed, etc, con Mock podemos probar los 2",
    content: `
    // emailSender.js

    export async function sendEmail(to, subject, body) {
      // Código para enviar el correo electrónico a través de la API del servidor de correo
      // y devuelve una respuesta indicando si el envío fue exitoso o no.
      const response = await api.sendEmail({ to, subject, body });
      return response;
    }
    
    // emailActions.js
    import { sendEmail } from './emailSender';
    
    export async function sendWelcomeEmail(user) {
      const email = user.email;
      const subject = 'Bienvenido a nuestra plataforma';
      const body = \`Hola \${user.name}, gracias por unirte a nosotros. ¡Esperamos que disfrutes de nuestra plataforma!\`;
      return sendEmail(email, subject, body);
    }`,
    content2:`// app.test.js

    import { fetchDataFromAPI } from './api';
    import processData from './app';
    
    // Crear un Mock de fetchDataFromAPI
    jest.mock('./api', () => ({
      fetchDataFromAPI: jest.fn().mockResolvedValue([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]),
    }));
    
    test('processData should fetch data from API and return the length', async () => {
      const result = await processData();
    
      // Verificar que fetchDataFromAPI fue llamada correctamente
      expect(fetchDataFromAPI).toHaveBeenCalled();
    
      // Verificar el resultado de processData
      expect(result).toBe(2);
    });
    
    // emailActions.test.js

import { sendEmail, sendWelcomeEmail } from './emailActions';

// Creamos un Mock de la función sendEmail
jest.mock('./emailSender', () => ({
  sendEmail: jest.fn(),
}));

test('sendWelcomeEmail should call sendEmail with correct parameters', async () => {
  const user = { name: 'John', email: 'john@example.com' };
  const emailContent = \`Hola \${user.name}, gracias por unirte a nosotros. ¡Esperamos que disfrutes de nuestra plataforma!\`;

  // Configuramos el Mock para simular una respuesta exitosa del servidor de correo
  sendEmail.mockResolvedValue({ success: true });

  await sendWelcomeEmail(user);

  // Verificamos que sendEmail fue llamada correctamente con los parámetros esperados
  expect(sendEmail).toHaveBeenCalledWith(user.email, 'Bienvenido a nuestra plataforma', emailContent);
});

    `,
}
 const call = {
  id:27,
  category:"javascript",
  name:"call",
    title: "Call",
    subtitle: "func.call(thisArg, arg1, arg2, …);",
    description: `
    func: La función que se va a llamar. \n
    thisArg: El valor que se utilizará como this dentro de la función func. \n
    arg1, arg2, ...: Argumentos individuales que se pasarán a la función func. \n
    
    Cuando usamos call(), establecemos explícitamente el valor de this dentro de la función func al objeto proporcionado como thisArg. Esto nos permite ejecutar la función en el contexto de un objeto específico, lo que puede ser útil en ciertas situaciones.`,

    content: `const person = {
        name: 'John',
        greet: function(greeting) {
          console.log(\`\${greeting}, \${this.name}!\`);
        }
      };
      
      const anotherPerson = {
        name: 'Jane'
      };
      
      person.greet('Hello'); // Output: Hello, John!
      
      // Llamando a la función greet de person, pero estableciendo el valor de this como anotherPerson
      person.greet.call(anotherPerson, 'Hi'); // Output: Hi, Jane!`,
    content2:``,
}
const apply = {
  id:28,
  category:"javascript",
  name:"apply",
  title: "Apply",
  subtitle: "func.apply(thisArg, [arg1, arg2, ...]);",
  description: "",
  content: `const person = {
    name: 'John',
    greet: function(greeting) {
      console.log(\`\${greeting}, \${this.name}!\`);
    }
  };
  
  const anotherPerson = {
    name: 'Jane'
  };
  
  person.greet('Hello'); // Output: Hello, John!
  
  // Llamando a la función greet de person, pero estableciendo el valor de this como anotherPerson
  person.greet.apply(anotherPerson, ['Hi']); // Output: Hi, Jane!`,
  content2:``,
}
const bind = {
  id:29,
  category:"javascript",
  name:"bind",
  title: "Bind",
  subtitle: "",
  description: "En lugar de llamar directamente al método greet de person, utilizamos bind() para crear una nueva función llamada greetJane que está vinculada al objeto anotherPerson. Al llamar a greetJane('Hi'), se imprimirá \"Hi, Jane!”.La ventaja de bind() es que nos permite crear funciones con el valor de this preestablecido, lo que puede ser útil en situaciones en las que necesitamos pasar una función con un this específico como callback a otras partes de nuestro código.",
  content: `const person = {
    name: 'John',
    greet: function(greeting) {
      console.log(\`\${greeting}, \${this.name}!\`);
    }
  };
  
  const anotherPerson = {
    name: 'Jane'
  };
  
  person.greet('Hello'); // Output: Hello, John!
  
  // Vinculando la función greet de person con anotherPerson
  const greetJane = person.greet.bind(anotherPerson);
  
  greetJane('Hi'); // Output: Hi, Jane!`,
  content2:``,
}
const bindCall = {
  id:30,
  category:"javascript",
  name:"bindCall",
  title: "Bind & Callback",
  subtitle: "",
  description: "",
  content: `// Función para mostrar un mensaje de bienvenida
  function welcomeMessage(message) {
    console.log(\`\${message}, \${this.name}!\`);
  }
  
  // Objeto persona
  const person = {
    name: 'John'
  };
  
  // Utilizando bind() para vincular la función welcomeMessage a la persona
  const greetJohn = welcomeMessage.bind(person, 'Hello');
  
  // Utilizando la función greetJohn como callback
  function greet(callback) {
    callback();
  }
  
  // Llamando a la función greet con greetJohn como callback
  greet(greetJohn); // Output: Hello, John!
  `,
  content2:``,
}
const callback = {
  id:31,
  category:"javascript",
  name:"callback",
  title: "Callback",
  subtitle: "",
  description: "",
  content: `// Función que realiza una operación y llama al callback cuando ha terminado
  function realizarOperacion(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado);
  }
  
  // Función de callback que muestra el resultado
  function mostrarResultado(resultado) {
    console.log(\`El resultado es: \${resultado}\`);
  }
  
  // Llamamos a la función realizarOperacion y pasamos mostrarResultado como callback
  realizarOperacion(5, 3, mostrarResultado); // Output: El resultado es: 8`,
  content2:``,
}
const promises = {
  id:32,
  category:"javascript",
  name:"promises",
  title: "Promises",
  subtitle: "",
  description: "",
  content: `// Función que devuelve una promesa que resuelve después de 2 segundos
  function esperarDosSegundos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promesa resuelta después de 2 segundos');
      }, 2000);
    });
  }
  
  // Usando la promesa
  esperarDosSegundos()
    .then((resultado) => {
      console.log(resultado); // Output: Promesa resuelta después de 2 segundos
    })
    .catch((error) => {
      console.error('Hubo un error:', error);
    });`,
  content2:`Para evitar la pérdida de control que conllevan los callback…

  1- creamos la función promesa
  
  function createOrder( cart ) {
    const pr = new Promise( function ( resolve, reject ) {
      if( !validateOrder( cart ) ) {
        const err = new Error( “Cart is not valid” )
        reject( err )
      }
      // si nos llega la variable..const orderId = “12345”
      if( orderId ) {
        resolve( orderId )
      }
    return pr
  
  2- usamos la función promesa
  
  createOrder( cart ).then ( function ( orderId ) {
        console.log( orderId )
        return orderId } )
        .catch( function( err ) {
        console.log( err.message ) 
      } ).then( function( orderId ) {
        return proceedToPayment( orderId )
      } ).then( function( paymentInfo ) {
        console.log( paymentInfo )`,
}
const promiseAll = {
  id:33,
  category:"javascript",
  name:"promiseAll",
  title: "Promise All",
  subtitle: "",
  description: "Promise.all() es especialmente útil cuando necesitas realizar múltiples operaciones asíncronas y esperar a que todas se completen antes de continuar con el código.",
  content: `// Función que devuelve una promesa que resuelve después de cierto tiempo
  function esperar(tiempo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(\`Resuelta después de \${tiempo} ms\`);
      }, tiempo);
    });
  }
  
  // Creamos un array de promesas
  const promesas = [
    esperar(2000), // Resuelve después de 2 segundos
    esperar(1000), // Resuelve después de 1 segundo
    esperar(3000)  // Resuelve después de 3 segundos
  ];
  
  // Usando Promise.all() para esperar a que todas las promesas se resuelvan
  Promise.all(promesas)
    .then((resultados) => {
      console.log(resultados);
      // Output: ["Resuelta después de 2 segundos", "Resuelta después de 1 segundo", "Resuelta después de 3 segundos"]
    })
    .catch((error) => {
      console.error('Hubo un error:', error);
    });`,
  content2:`useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {

      try {
        const responses = await Promise.all(
          watchList.map(stock => {
            return finnHub.get("/quote", {
              params: {
                symbol: stock
              }
            })

          })
        )

        const data = responses.map(response => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })

        if (isMounted) {
          setStock(data)
        }

      } catch (err) {

      }
    }
    fetchData()
    return () => (isMounted = false)
  }, [watchList])`,
}
const promiseAsync = {
  id:34,
  category:"javascript",
  name:"promiseAsync",
  title: "promise & async/await",
  subtitle: "",
  description: "Utilizando then() y catch(): Puedes encadenar los métodos .then() para manejar el caso de éxito y .catch() para manejar errores en una cadena de promesas.",
  description2:"Con async/await, puedes escribir el código de manera más sincrónica, como si estuvieras escribiendo código secuencial, pero detrás de escena, las operaciones asíncronas se están manejando como promesas.",
  content: `function obtenerDatosDeAPI() {
    return fetch('https://ejemplo-api.com/datos')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  `,
  content2:`async function obtenerDatosDeAPI() {
    try {
      const response = await fetch('https://ejemplo-api.com/datos');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }`,
}
const resolveReject = {
  id:35,
  category:"javascript",
  name:"resolveReject",
  title: "Resolve & Reject",
  subtitle: "promise.resolve & promise.reject",
  description: "Promise.resolve() es útil cuando necesitas obtener una promesa resuelta de manera síncrona y seguir trabajando con ella como parte de tu flujo asincrónico. Puede simplificar el código y permitir una manipulación más uniforme de datos y promesas. Siempre que tengas un valor o resultado inmediato que deseas tratar como promesa, Promise.resolve() es una opción práctica para ello.",
  description2: "En este caso, al usar Promise.resolve(), estamos asegurando que independientemente de si el resultado es inmediato o se obtiene de una operación asincrónica real, siempre estamos tratando con una promesa, lo que nos permite aplicar el mismo manejo de errores para todas las situaciones.",
  content: `// Valor inmediato
  const resultado = 'Este es el resultado';
  
  // Convertir el valor en una promesa resuelta
  const promesaResuelta = Promise.resolve(resultado);
  
  // Usar la promesa en una cadena
  promesaResuelta.then((valor) => console.log(valor)); // Output: "Este es el resultado"
  
  const dato = 42;

// Lógica condicional
const promesa = dato > 50 ? Promise.resolve('Es mayor que 50') : Promise.reject(new Error('Es menor o igual que 50'));

// Usar la promesa
promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error.message)); // Output: "Es menor o igual que 50"
  
  `,
  content2:`function obtenerDatosDeAPI() {
    // Supongamos que a veces tenemos un resultado inmediato disponible
    const resultadoInmediato = 'Este es el resultado inmediato';
  
    // Utilizamos Promise.resolve() para convertir el resultado en una promesa resuelta
    return Promise.resolve(resultadoInmediato);
  }
  
  // Usamos la función para obtener los datos y aplicamos el manejo de errores
  obtenerDatosDeAPI()
    .then((resultado) => {
      console.log(resultado); // Output: "Este es el resultado inmediato"
    })
    .catch((error) => {
      console.error('Error:', error);
    });`,
}
const starvation = {
  id:36,
  category:"javascript",
  name:"starvation",
  title: "Starvation",
  subtitle: " bloqueo : cuando el callback Queue no se ejecuta nunca porque el MicroTask Queue siempre está lleno",
  description: "Este enfoque puede ser útil en ciertos escenarios en los que deseas ejecutar una operación larga en segundo plano sin bloquear la ejecución del resto del código, pero aún necesitas manejar algún resultado o acción cuando la operación larga finalice.Por ejemplo, podrías utilizarlo para iniciar una operación asincrónica, como una solicitud a una API o una carga de datos, mientras que la interfaz de usuario sigue siendo interactiva para el usuario. Una vez que la operación asincrónica se complete, puedes actualizar la interfaz de usuario o mostrar resultados basados en el resultado de la operación.",
  description2:"En este caso, operacionLarga() se convierte en una promesa, lo que permite que otras operaciones se ejecuten mientras la operación intensiva se está llevando a cabo en segundo plano. La función operacionRapida() se llama dentro del .then() de la promesa, asegurando que se ejecute una vez que la operación larga haya terminado.",
  content: `function operacionLarga() {
    for (let i = 0; i < 1000000000; i++) {
      // Realizar una operación intensiva
    }
  }
  
  function operacionRapida() {
    console.log('Operación rápida completada');
  }
  
  operacionLarga();
  operacionRapida();
  `,
  content2:`function operacionLarga() {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < 1000000000; i++) {
          // Realizar una operación intensiva
        }
        resolve();
      }, 0);
    });
  }
  
  function operacionRapida() {
    console.log('Operación rápida iniciada');
  
    operacionLarga().then(() => {
      console.log('Operación rápida completada');
    });
  
    console.log('Fin de operaciónRapida');
  }
  
  operacionRapida();`,
}
const heritance = {
  id:37,
  category:"javascript",
  name:"heritance",
  title: "Heritance",
  subtitle: "",
  description: "con proptypes ( anterior a ECMAScript 2015 “ES6” )",
  description2:"con clases ( ECMAScript 2015 “ES6” )",
  content: `// Prototipo (Clase) Padre
  function Animal(nombre) {
    this.nombre = nombre;
  }
  
  Animal.prototype.saludar = function() {
    console.log(\`Hola, soy un animal llamado \${this.nombre}\`);
  };
  
  // Prototipo (Clase) Hijo que hereda del prototipo padre
  function Perro(nombre, raza) {
    Animal.call(this, nombre); // Llamar al constructor del padre con el contexto del hijo
    this.raza = raza;
  }
  
  Perro.prototype = Object.create(Animal.prototype); // Heredar del prototipo padre
  Perro.prototype.constructor = Perro; // Restaurar el constructor
  
  Perro.prototype.ladrar = function() {
    console.log('¡Guau! ¡Guau!');
  };
  
  const miPerro = new Perro('Fido', 'Labrador');
  miPerro.saludar(); // Salida: Hola, soy un animal llamado Fido
  miPerro.ladrar(); // Salida: ¡Guau! ¡Guau!`,
  content2:`// Clase Padre
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() {
      console.log(\`Hola, soy un animal llamado \${this.nombre}\`);
    }
  }
  
  // Clase Hijo que hereda de la clase padre
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llamar al constructor del padre con el contexto del hijo
      this.raza = raza;
    }
  
    ladrar() {
      console.log('¡Guau! ¡Guau!');
    }
  }
  
  const miPerro = new Perro('Fido', 'Labrador');
  miPerro.saludar(); // Salida: Hola, soy un animal llamado Fido
  miPerro.ladrar(); // Salida: ¡Guau! ¡Guau!`,
}
const events = {
  id:38,
  category:"javascript",
  name:"events",
  title: "Events",
  subtitle: "like EVENT preventDefault(sobretodo para los submit)",
  description: "EVENT delegation",
  description2:"EVENT stopPropagation ( no suele ser necesario en react )",
  content: `import React from 'react';

  const MyList = () => {
    const handleItemClick = (event) => {
      if (event.target.tagName === 'LI') {
        console.log('Hiciste clic en:', event.target.innerText);
      }
    };
  
    return (
      <ul onClick={handleItemClick}>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    );
  };
  
  export default MyList;`,
  content2:`<div id="outer">
  <div id="inner">
    <button id="boton">Haz clic</button>
  </div>
</div>

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const boton = document.getElementById('boton');

outer.addEventListener('click', function(event) {
  console.log('Clic en el elemento externo (outer)');
});

inner.addEventListener('click', function(event) {
  event.stopPropagation(); // Detiene la propagación del evento hacia arriba
  console.log('Clic en el elemento interno (inner)');
});

boton.addEventListener('click', function(event) {
  console.log('Clic en el botón');
});

Clic en el botón
Clic en el elemento interno (inner)
`,
}
const debouncing = {
  id:39,
  category:"javascript",
  name:"debouncing",
  title: "Debouncing & Throttling",
  subtitle: "",
  description: "En el ejemplo de debouncing, se utiliza setTimeout para establecer un temporizador que espera 500 ms después del último evento antes de ejecutar la función. Si se produce un evento antes de que se cumplan los 500 ms, el temporizador se reinicia y se espera nuevamente 500 ms después del último evento.",
  description2:"A diferencia del debouncing, donde el temporizador se reinicia cada vez que el usuario escribe algo, el throttling ejecuta la lógica dentro de useEffect en intervalos regulares, incluso si el usuario sigue escribiendo. Esto significa que se ejecutará la lógica en cada intervalo de tiempo mientras el campo de entrada esté cambiando, lo que puede ser útil para ciertos casos de uso.",
  content: `import React, { useState, useEffect } from 'react';

  const DebouncingExample = () => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
  
    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedValue(inputValue);
      }, 500); // Establece el tiempo de espera (en milisegundos)
  
      return () => {
        clearTimeout(timerId);
      };
    }, [inputValue]);
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Valor original: {inputValue}</p>
        <p>Valor debounced: {debouncedValue}</p>
      </div>
    );
  };
  
  export default DebouncingExample;`,
  content2:`import React, { useState, useEffect } from 'react';

  const ThrottlingExample = () => {
    const [inputValue, setInputValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setThrottledValue(inputValue);
      }, 500); // Establece el intervalo de tiempo (en milisegundos)
  
      return () => {
        clearInterval(intervalId);
      };
    }, [inputValue]);
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Valor original: {inputValue}</p>
        <p>Valor throttled: {throttledValue}</p>
      </div>
    );
  };
  
  export default ThrottlingExample;
  `,
}
const recursivity = {
  id:40,
  category:"javascript",
  name:"recursivity",
  title: "Recursividad",
  subtitle: "",
  description: "",
  description2:"",
  content: `const data = [
    {
      id: 1,
      name: "Elemento 1",
      children: [
        {
          id: 2,
          name: "Elemento 1.1",
          children: [
            {
              id: 3,
              name: "Elemento 1.1.1",
              children: [],
            },
          ],
        },
        {
          id: 4,
          name: "Elemento 1.2",
          children: [],
        },
      ],
    },
    {
      id: 5,
      name: "Elemento 2",
      children: [],
    },
  ];
  
  import React from "react";

const RecursiveList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.children.length > 0 && <RecursiveList data={item.children} />}
        </li>
      ))}
    </ul>
  );
};

export default RecursiveList;
  `,
  content2:`import React from "react";
  import RecursiveList from "./RecursiveList";
  
  const App = () => {
    const data = [
      // Estructura de datos como se mencionó     	    //    anteriormente
    ];
  
    return (
      <div>
        <h1>Lista Jerárquica</h1>
        <RecursiveList data={data} />
      </div>
    );
  };
  
  export default App;
  
  ---------

  Lista Jerárquica
- Elemento 1
  - Elemento 1.1
    - Elemento 1.1.1
  - Elemento 1.2
- Elemento 2

  `,
}
const currying = {
  id:41,
  category:"javascript",
  name:"currying",
  title: "Currying",
  subtitle: "",
  description: "El uso de currying nos permite crear componentes más flexibles y reutilizables al componerlos con diferentes propiedades o configuraciones. En este caso, hemos creado una fábrica de componentes (withIncrement) que nos permite generar múltiples instancias de un componente con funcionalidades similares pero con diferentes configuraciones.",
  description2:"",
  content: `import React, { useState } from "react";

  // Función curry que recibe el incremento como argumento y devuelve un componente Counter
  const withIncrement = (increment) => {
    return () => {
      const [count, setCount] = useState(0);
  
      const handleIncrement = () => {
        setCount((prevCount) => prevCount + increment);
      };
  
      return (
        <div>
          <p>Contador con incremento de {increment}</p>
          <p>Contador: {count}</p>
          <button onClick={handleIncrement}>Incrementar</button>
        </div>
      );
    };
  };
  
  // Creamos dos componentes Counter utilizando la función curry con diferentes incrementos
  const CounterWithIncrement2 = withIncrement(2);
  const CounterWithIncrement5 = withIncrement(5);
  
  // Componente principal que muestra los contadores con diferentes incrementos
  const App = () => {
    return (
      <div>
        <h1>Contadores con diferentes incrementos</h1>
        <CounterWithIncrement2 />
        <CounterWithIncrement5 />
      </div>
    );
  };
  
  export default App;
  `,
  content2:``,
}
const upgrade = {
  id:42,
  category:"performance",
  name:"upgrade",
  title: "More Improve performance",
  subtitle: "",
  description: "",
  description2:"",
  content: `	Server-Side Rendering (SSR): Implementar Server-Side Rendering
   con tecnologías como Next.js para renderizar la aplicación en el servidor 
   antes de enviarla al cliente. Esto mejora la velocidad de carga inicial y 
   la capacidad de indexación de motores de búsqueda.
  
  Gestión del estado eficiente: Utilizar bibliotecas de gestión del estado
  como Redux o MobX para administrar el estado de la aplicación de manera 
  eficiente y escalable. Esto ayuda a evitar el anidamiento excesivo de 
  componentes y la propagación excesiva de props.
  
  Optimización de imágenes y recursos: Comprimir y optimizar las imágenes 
  y recursos utilizados en la aplicación para reducir el tiempo de carga 
  y mejorar el rendimiento general.
  
  Memoria y recursos: Monitorear y optimizar el uso de memoria y recursos 
  en la aplicación para evitar fugas de memoria y asegurar un rendimiento óptimo.
  
  Pruebas de rendimiento: Realizar pruebas de rendimiento para identificar posibles
  cuellos de botella y áreas de mejora en la aplicación. Utilizar herramientas 
  como Lighthouse, PageSpeed Insights o WebPageTest para medir el rendimiento 
  en diferentes dispositivos y condiciones de red.

  Implementación de lazy loading: Cargar imágenes, videos o componentes solo 
  cuando sean visibles en la pantalla del usuario utilizando técnicas de lazy 
  loading. Esto reduce el tiempo de carga inicial y mejora la velocidad de la 
  aplicación.

  Caching y almacenamiento local: Utilizar estrategias de almacenamiento en caché 
  y almacenamiento local para reducir la necesidad de realizar solicitudes al 
  servidor y mejorar la velocidad de respuesta.
  `,
  content2:``,
}
const startcss = {
  id:43,
  category:"css",
  name:"startcss",
  title: "Start, Flex & Grid",
  subtitle: "",
  description: "",
  description2:"",
  content: `START

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
  }
  
FLEX

display: flex;
flex-direction: column;
align-items: center;      // y
justify-content: center // x
gap: 20px;
flex-wrap: wrap;

GRID

display: grid;
grid-template-columns: 3fr 1fr;
grid-template-columns: repeat ( 3, 1fr )
grid-template-rows: repeat ( 4, auto )
align-items: center;      // y
justify-content: center // x
gap: 20px;

grid-column-start: 1;
grid-column-end: -1;
grid-column: 3/4;

grid-template-areas: “header       header     header”
				    “contenido contenido sidebar”
				    “widget       widget      sidebar”
				    “footer         footer       footer”
grid-area: “header”   
  `,
  content2:``,
}
const startcss2 = {
  id:44,
  category:"css",
  name:"startcss2",
  title: "Transition & Animation",
  subtitle: "",
  description: "",
  description2:"",
  content: `TRANSITION
  <style> 
  div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s, height 2s, transform 2s;
  }
  
  div:hover {
    width: 300px;
    height: 300px;
    transform: rotate(180deg);
  }
  </style>
  
  ANIMATION

.loadingSpinner {
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #000 transparent #555 transparent;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  `,
  content2:``,
}
const startcss3 = {
  id:45,
  category:"css",
  name:"boxShadow",
  title: "Box Shadow",
  subtitle: "",
  description: "",
  description2:"",
  photo: boxshadow
}
const router = {
  id:46,
  category:"performance",
  name:"router",
  title: "Router",
  subtitle: "",
  description: "",
  description2:"",
  content: `-CONFIG & PROVIDER- 
  react-router-dom 
  
  
  import { BrowserRouter, Routes, Route } from ‘react-router-dom’
  
  <BrowserRouter>
    <Routes>
      <Route path= ‘ / ‘ element= { <componente /> }
      <Route path= ‘ /detail/:symbol ‘ element= { <componenteB /> }
      

-NAVEGAR A- 
react-router-dom 


import { useNavigate } from ‘react-router-dom’
const navigate = useNavigate( )
navigate( url )

dentro de una función que salta al clicar…
	const handleStock = ( symbol ) => { navigate( \`detail/\${ symbol }\` ) }


-USEPARAMS( )- 
react-router-dom 
  
  
1- en las rutas incluir  /:symbol
2- al clicar con navigate( \`x/\${ symbol }\`)
3- se recupera con Params
  
import { useParams } from ‘react-router-dom’
const { symbol } = useParams( )
  
ej — return <div> StockDetailPage { symbol }
      `,
  content2:``,
}
const context = {
  id:47,
  category:"performance",
  name:"context",
  title: "Context",
  subtitle: "",
  description: "",
  description2:"",
  content: `-CREACION- 
  Context 
  
  
    import { createContext } from ‘react’
    const AppContext = React.createContext( )
    const AppProvider = ( { children } ) => {
  
    -> …API calls, useState, useEffect	
  
    return (
    <AppContext.Provider value = { } >
      { children }
    </ AppContext.Provider >
  
    export { AppContext, AppProvider } 
  
      ---->  con customHook
  
    export const useGlobalContext = ( ) => {
      return useContext ( AppContext ) }
    sólo exportaríamos useGlobalContext
    
    
    -PROVIDER- 
Context 


	import { AppProvider } from ‘react’

	< AppProvider >
	< App / >
	</AppProvider >


  -USO- 
  Context 
  
  
    import { useGlobalContext } from ‘./useGlobal..’
    // const context = useContext( AppContext )
    const context = useGlobalContext( )  
    `,
  content2:``,
}
const redux = {
  id:48,
  category:"performance",
  name:"redux",
  title: "Redux",
  subtitle: "",
  description: "",
  description2:"",
  content: `-STORE & REDUCERS- 
  Redux 
  
    import { createStore } from ‘react-redux’
    const initialState = {
      jugadores: [ ],
      titulares: [ ].
      suplentes: [ ]
    }
    const reducerCoach = ( state = initialState, action ) => {
    if ( action.type === ‘AGREGAR_TITULAR’ ) {
    return {
      …state,
      titulares: state.titulares.concat ( action.jugador ),
      jugadores: state.jugadores.filter ( j => j.id !== action.jugador.id )
          .
          .
          .
    export default createStore ( reducerCoach )
    
    
    -PROVIDER- 
Redux 


	import { Provider } from ‘react-redux’
	import store from ‘./store’
					// y envolvemos con el provider nuestra app
	< Provider store={ store }>
		// contenido de la aplicación
	< / Provider >
    

  -select & DISPATCH- 
  Redux 
  
  
  
    import { connect } from ‘react-redux’
    
    const Jugadores = ( { jugadores } ) => {
    const mapStateToProps = state => ( { jugadores: state.jugadores } )
    const mapDispatchToProps = dispatch => ( { } )
  
    export default connect ( mapStateToProps, mapDispatchToProps ) ( Jugadores )
  
  4 - Modificar el store
  
    const mapDispatchToProps = dispatch => ( { 
      agregarTitular( jugador ) {
        dispatch ( {
          type: ‘AGREGAR_TITULAR’,
          jugador
         } )
    
    + -> la importas como prop 
       -> const Jugadores = ( { jugadores, agregarTitular } ) => {
        { jugadores.map ( j => {
  
    + -> la usas en el onClick = { ( ) => agregarTitular( j )
       -> const Jugadores = ( {jugadores, agregarTitular } ) => {
  
    `,
  content2:``,
}
const toolkit = {
  id:49,
  category:"performance",
  name:"toolkit",
  title: "Redux Toolkit",
  subtitle: "",
  description: "",
  description2:"",
  content: `-STORE- 
  Redux - Toolkit
  
  
  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from '../features/auth/authSlice'
  import goalReducer from '../features/goals/goalSlice'
  
  export const store = configureStore({
    reducer: {
      auth: authReducer,
      goals: goalReducer,
    },
  });
  
  
  -PROVIDER- 
Redux - Toolkit


import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


-SLICE & THUNK- ( reducer & extrareducer )
Redux - Toolkit


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })


export const { reset } = authSlice.actions
export default authSlice.reducer
  `,
  content2:`-API POST- 
  Redux - Toolkit
  
  
  const API_URL = '/api/v1/users/'
  
  // Register user
  const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }
  
  
  -SELECTOR & DISPATCH- 
Redux - Toolkit

import { useSelector, useDispatch } from 'react-redux'
import {register, reset} from '../features/auth/authSlice'


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector( (state)=> state.auth)
  const {goals, isLoading, isError, message} = useSelector((state)=> state.goals)

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2 } = formData


    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])    

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))


    }
    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email, 
                password
            }

        dispatch(register(userData))
        }
    }


  `,
}
const persist = {
  id:50,
  category:"performance",
  name:"persist",
  title: "Redux Toolkit + Persist",
  subtitle: "",
  description: "",
  description2:"",
  content: `-STORE- ( persist )
  Redux - Toolkit
  
  import { configureStore } from '@reduxjs/toolkit'
  import bazzarReducer from './bazzarSlice'
  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, bazzarReducer)
  
  export const store = configureStore({
    reducer: {bazzar: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export let persistor = persistStore(store)
  

-PROVIDER- ( persist )
Redux - Toolkit

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from '../src/redux/store'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


-SLICE & THUNK- ( reducer )
Redux - Toolkit

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    productData: [],
    userInfo: null
}

export const bazzarSlice = createSlice({
  name: 'bazzar',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        const item = state.productData.find(item => item._id === action.payload._id)

        if(item){item.quantity += action.payload.quantity}
        else{state.productData.push(action.payload)}
    },
    deleteItem: (state,action) => {
        state.productData = state.productData.filter(item => item._id !== action.payload)
    },
    resetCart: (state) => {
        state.productData = []
    },
    incrementQuantity: (state,action) => {
        const item = state.productData.find( item => item._id === action.payload._id)
        if ( item ) { item.quantity++ }
    },
    decrementQuantity: (state,action) => {
        const item = state.productData.find( item => item._id === action.payload._id)
        if ( item ) { item.quantity-- }
    },
    addUser: (state,action)=> {
        state.userInfo = action.payload
    },
    removeUser: (state)=> {
        state.userInfo = null
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteItem, resetCart,incrementQuantity,decrementQuantity,addUser,removeUser } = bazzarSlice.actions

export default bazzarSlice.reducer
  `,
  content2:`-SELECTOR - 
  Redux - Toolkit
  
  import { useEffect, useState } from 'react'
  import { useSelector } from 'react-redux'
  import { toast, ToastContainer } from 'react-toastify'
  import CartItem from '../components/CartItem'
  import StripeCheckout from 'react-stripe-checkout'
  import axios from 'axios'
  
  function Cart() {
    const productData = useSelector(state => state.bazzar.productData)
    const userInfo = useSelector((state)=> state.bazzar.userInfo)
  
    const [totalAmt, setTotalAmt] = useState('')
    const [payNow, setPayNow] = useState(false)
  
    useEffect(()=>{
      let price = 0
      productData.map(item => {
        price += item.price * item.quantity
        return price
      })
      setTotalAmt(price.toFixed(2))
    },[productData])
  
    const handleCheckOut = () =>{
      if(userInfo){ setPayNow(true)
      } else {
        toast.error("Please sign in to Checkout")
      }
    }
    const payment = async(token)=> {
      await axios.post('http://localhost:8000/pay',{
        amount:totalAmt * 100,
        token: token,
      })
    }
  
    return (
      <div>
        <img  className='w-full h-60 object-cover' src="https://previews.123rf.com/images/peangdao/peangdao1606/peangdao160600192/58512109-water-in-swimming-pool-blue-water-with-sun-reflection-water-effect-with-sun-reflection-in-swimming.jpg" alt="cartImg"/>
        <div className='flex max-screen-xl mx-auto py-20'>
          <CartItem />
          <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-2xl font-medium' >cart totals</h2>
              <p className='flex items-center gap-4 text-base'>
                Subtotal{' '}
                <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
              </p>
              <p className='flex itmes-start gap-4 text-base'>
                Shipping{' '}
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </p>
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              {' '}
              Total <span className='text-xl font-bold'>$ {totalAmt}</span>
            </p>
            <button onClick={handleCheckOut}className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
              procced to checkout
            </button>
            {
              payNow && <div className='w-full mt-6 flex items-center justify-center'>
                <StripeCheckout 
                  stripeKey='pk_test_51MmK7HIZcMkHbi7FULBu5K4iZ0vdb3cxAZok1HooOOUUQm8kCpt5dC9nHLwgpoNtuKp4AN0WV3RMfq3VCa1hVFiF00YdQtiOOX'
                  name='Bazzar Online Shopping'
                  amount={totalAmt * 100}
                  label='Pay to bazzar'
                  description={\`Your Payment amount is $\${totalAmt}\`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            }
          </div>
        </div>
        <ToastContainer 
            position='top-left'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
            />
      </div>
    )
  }
  
  export default Cart
  
  
-DISPATCH- 
Redux - Toolkit

import {BsGithub, BsGoogle} from 'react-icons/bs'
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/bazzarSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = (e) =>{
        e.preventDefault()
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          dispatch(addUser({
            _id: user._id,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }))
          setTimeout(()=>{
            navigate('/')
          },1500)
        }).catch((error) => {
          console.log(error)
        });
    }
    const handleLogout = (e) =>{
        signOut(auth)
        .then(() => {
            toast.success("Log Out Successfully")
            dispatch(removeUser())

        }).catch((error) => {
          console.log(error)
        });
    }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10'>
        <div  onClick={handleGoogleLogin}  className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
                        rounded-md flex items-center justify-center gap-2 hover:border-blue-600
                        cursor-pointer duration-300'>
            <BsGoogle className='w-8 scale-150'/>
            <span className='text-sm text-gray-900'>Sign in with Google</span>
        </div>
        <button onClick={handleLogout} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
      </div>
      <div className='w-full flex items-center justify-center gap-10'>
        <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400
                        rounded-md flex items-center justify-center gap-2 hover:border-blue-600
                        cursor-pointer duration-300'>
            <BsGithub className='w-8 scale-150'/>
            <span className='text-sm text-gray-900'>Sign in with GitHub</span>
        </div>
        <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
      </div>
      <ToastContainer 
          position='top-left'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />
    </div>
  )
}

export default Login


-DISPATCH- 
Redux - Toolkit

import { useEffect, useState } from "react"
import { MdOutlineStar } from "react-icons/md"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { addToCart } from "../redux/bazzarSlice"
import { ToastContainer, toast } from 'react-toastify';


function Product() {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    const [quantity, setQuantity] = useState(1)
   const location = useLocation()
   useEffect(()=>{
    setDetails(location.state.item)
   },[location])
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
            <img
                className="w-full h-[550px] object-cover"
                src={details.image}
                alt="productImg"
            />
            <div className="absolute top-4 right-0">
            {details.isNew && <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">Sale</p>}
            </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
            <div>
                <h2 className="text-4xl font-semibold">{details.title}</h2>
                <div className="flex items-center gap-4 mt-3">
                <p className="line-through text-gray-500">\${details.oldPrice}</p>
                <p className="font-semibold">\${details.price}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                </div>
                <p className="text-xs text-gray-500">(1 Customer review)</p>
            </div>
            <p className="text-base text-gray-500 -mt-3">{details.description}</p>
            <div className="flex gap-4">
            <div className="flex items-center gap-4 border p-3 w-52 justify-between text-gray-500">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                    <button onClick={()=>setQuantity(quantity === 1 ?prev => prev : prev => prev -1)} className="border h-5 font-normal text-lg flex items-center justify-center
                    px-2 hover:bg-gray-700 hover:text-white cursor:pointer duration-300 active:bg-black">-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>setQuantity(prev => prev +1)} className="border h-5 font-normal text-lg flex items-center justify-center
                    px-2 hover:bg-gray-700 hover:text-white cursor:pointer duration-300 active:bg-black">+</button>
                </div>
            </div>
            <button  onClick={()=>
            dispatch(
                addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: quantity,
                    description: details.description,
                })
            ) & toast.success(\`\${details.title} is added\`)
        } 
            className="bg-black text-white py-3 px-6 active:bg-gray-800">add to cart</button>
            </div>
            <p className="text-base text-gray-500">Cartegory: <span className="font-medium capita">{details.category}</span> </p>
        </div>
      </div>
      <ToastContainer 
          position='top-left'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
          />
    </div>
  )
}

export default Product
  `,
}
const sagas = {
  id:51,
  category:"performance",
  name:"sagas",
  title: "Redux Sagas",
  subtitle: "",
  description:"",
  description2: "Con esto, cuando el componente se monte, se ejecutará la acción fetchData, que activará la saga fetchDataSaga. La saga realizará la llamada asincrónica a la API simulada y actualizará el estado en función del resultado de la llamada. El componente mostrará el mensaje \"Cargando...\" mientras se realizan las operaciones asincrónicas, o mostrará el mensaje de error si algo sale mal, o mostrará los datos obtenidos si la llamada fue exitosa.  ",
  content: `
  // actions.js
export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = () => ({ type: FETCH_DATA });


// reducer.js
const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


// sagas.js
import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataError } from './actions'; // Crear estas acciones en el archivo actions.js

// Función simulada para obtener datos de una API (puedes reemplazar esto con una llamada real)
const fetchDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulamos una respuesta exitosa con datos
      resolve({ data: 'Datos obtenidos desde la API' });
      // Simulamos un error
      // reject('Ocurrió un error al obtener los datos desde la API');
    }, 2000);
  });
};

// Saga para manejar la acción FETCH_DATA
function* fetchDataSaga() {
  try {
    const response = yield call(fetchDataFromAPI); // Llama a la función asíncrona
    yield put(fetchDataSuccess(response.data)); // Dispara la acción de éxito con los datos obtenidos
  } catch (error) {
    yield put(fetchDataError(error)); // Dispara la acción de error si algo sale mal
  }
}

// Escuchamos la acción FETCH_DATA y ejecutamos fetchDataSaga
export function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
}

// index.js (o el archivo principal donde configuras la tienda Redux)
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducer'; // Asegúrate de tener el archivo reducer.js con el dataReducer importado aquí
import { watchFetchData } from './sagas'; // Importa la saga watchFetchData que creamos antes

// Crea el middleware de Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Configura la tienda Redux con el middleware de Saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Ejecuta la saga watchFetchData para manejar la acción FETCH_DATA
sagaMiddleware.run(watchFetchData);

// Renderiza la aplicación con el proveedor Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// Component.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const Component = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData(); // Llama a la acción para obtener los datos al montar el componente
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Datos obtenidos: {data}</div>;
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchData })(Component);

`,
  content2:``,
}
const mutation = {
  id:52,
  category:"javascript",
  name:"mutation",
  title: "Data Mutation",
  subtitle: "",
  description: "",
  description2:"Si tienes un objeto que tiene propiedades clave-valor y deseas \"mapear\" o transformar sus valores, puedes convertir los valores del objeto en un array usando Object.values() y luego aplicar map() en ese array resultante.   Para devolver un nuevo objeto con los valores actualizados usando el método map() en JavaScript, puedes combinar Object.keys() para iterar a través de las propiedades del objeto y luego crear un nuevo objeto con los valores transformados",
  content: `.typeOf === string, number, array, object, function
  .length
  .length -1                     -> palabra 
  x[x.length -1]              -> carácter 
  .reverse( )
  .indexOf( )
  Array.isArray		  -> true - false 
  
  
  Strings

.toUpperCase( )
.toLowerCase( )
.substring( )
.slice( )

.parseInt( )      -> convertir a num
.parseInt( , 2 )  -> binary
.split(caracter)-> convertir en array


Numbers

%1 -> entero-decimal
%2 -> par-impar - primo1
%n -> primo resto

Math.floor( ) -> redondeo a la baja
Math.random( )

Math.max( )
Math.min( )
Math.round( )
Math.PI( )
Math.pow( )
Math.sqrt( )

.toString( ) -> convertir a string


Arrays

.join -> convertir en string

.splice( ) -> introducir o eliminar
.slice( ) -> nuevo array / ini - fin
una suma de 2 slice tb permite
sacar elementos.

.flat( )  -> aplana el array
[ ].concat( …arr )

.sort( ( a , b ) => a - b )
.sort( ( a , b ) => { 
return a === b ? 0 :  a > b ? 1 : -1
} —————-> letras

.push( ) -> introduce al final
.pop( ) -> elimina al final
.unshift( ) -> introduce al principio
.shift( ) -> elimina al principio


.map( )
.filter( )
.reduce( ) -> acumular o sumar
.some( )
.every( )
.forEach( )
.while( )
.for( )        * in objects / of arrays
.if( )
.switch( )


Objects

.hasOwnProperty( )
  `,
  content2:`Object.value 
  
  const objeto = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const arrayDeValores = Object.values(objeto);
  
  const nuevoArray = arrayDeValores.map(valor => valor * 2);
  
  console.log(nuevoArray); // [2, 4, 6]


Object.key

  const objeto = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const nuevoObjeto = {};
  Object.keys(objeto).forEach(key => {
    nuevoObjeto[key] = objeto[key] * 2;
  });
  
  console.log(nuevoObjeto); // { a: 2, b: 4, c: 6 }
  
  `,
}
const regex = {
  id:53,
  category:"javascript",
  name:"regex",
  title: "Regex",
  subtitle: "",
  description: "",
  description2:"",
  content: `let prueba = FreeCodeCamp; 
  let regex = /code/;
   regex.test( prueba )
  Muestra TRUE o FALSE
  
  .match ( )
  Inverso a test : prueba.match(regex)
  
  ( | ) OR 			Búsqueda de varios elementos
  
  ( . ) 			comodín

  s - Dot All: Permite que . coincida con cualquier carácter, incluido el salto de línea.
  Ejemplo: /a.b/s coincidirá con "a\nb".
  
  /b[aiu]g/		Sólo estas opciones entremedio
  
  /[a-e]at/		Rango alfabético
  
  /[a-z0-9]/ig		Rango compuesto
  
  /^[aeiou0-9]/ig		con la primera letra de cada línea que cumpla
  
  /a+/g			Caracter seguido ( 1 ó + )
  
  /go*/			coincidirá con 0 ó + letras o
  
  /s			Espacio
  i 			ignora may.min
  g 			busca + de una palabra
  
  /t[a-z]*i/ ->  titani 	Coincidencia normal  
  /t[a-z]*?i/ -> ti  		Coincidencia perezosa
  
  /^Ricky/ 		Sólo si está al principio..

  m - Multiline: Permite que ^ y $ coincidan con el principio y el final de cada línea en lugar de solo el principio y el final de la cadena.
Ejemplo: /^inicio/gm coincidirá con "inicio" al comienzo de cada línea.
  
  \\w    \\W 		Atajo [A-Za-z0-9_]   ^[A-Za-z0-9_]
  \\w{1} -> 1º carácter 	Corresponde a str[0]
  \\d      \\D
  
  /Oh{3,5}no/		Solo si la h esta entre 3 y 5 veces
  {3, }   {4}		3 ó más       /    sólo 4
  
  /color?r/		Duda idiomas ( color,colour )	
  
  Lookahead Positivo (?= ...): Coincide si lo que sigue cumple con el patrón dentro del lookahead, pero no avanza la posición actual.
Ejemplo: /foo(?=bar)/ coincidirá con "foo" solo si está seguido de "bar", pero no consumirá "bar".
  Lookahead Negativo (?! ...): Coincide si lo que sigue no cumple con el patrón dentro del lookahead, pero no avanza la posición actual.
Ejemplo: /foo(?!bar)/ coincidirá con "foo" solo si no está seguido de "bar", pero no consumirá "bar".
  
  y - Sticky: Solo encuentra coincidencias al comienzo de la cadena o donde terminó la última coincidencia.
Ejemplo: /patron/y solo buscará después de la última coincidencia.

  /(?=\\w{3,6}) (?=\\D*\\d\\d+)/ Coincidir contraseñas
  
  ( \\w+) \\1 \\1              	Encontrar palabras repetidas que no conoces.
  agrupaciones, una vez creadas se autonumeran para simplificar el re-usarlas
  
  .replace ( /code/ , rem)`,
  content2:``,
}
const git = {
  id:54,
  category:"Starter",
  name:"git",
  title: "Git",
  subtitle: "",
  description: "",
  description2:"",
  content: `
  git init
  git add .
  git commit -m "Primer commit"

  git remote add origin URL_DEL_REPOSITORIO
  git push -u origin master


  git status
  git add     css/general.css
  git diff    index.html   --> ver los diferentes cambios
  git add -p  index.html   --> te pregunta a cada cambio
  git status
  git push   -u origin    nombre rama
  git pull   origin master
  `,
  content2:``,
}
export const documentation = [
  errorData,noReRender,portal,portal2,portal3,
  scrollEl,id,dinamicImport,fadeIn,hideShow,
  slide,tables,ServiceWorkers,websockets,Improve,
  Improve2,eslint,webpack,jest,testing,testRedux,
  testRouter,testContext,integrationTest,spy,mock,
  call,apply,bind, bindCall,callback,promises,promiseAll,
  promiseAsync,resolveReject, starvation,heritance,events,
  debouncing,recursivity,currying,upgrade,startcss,startcss2,
  startcss3, router,context,redux,toolkit, persist,sagas,
  mutation,regex,git, 

]