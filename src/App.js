import React, { useState } from "react";
import { Provider } from "react-redux";
import { Head } from "./components/Head/Head.js";
import { NameScreen } from "./pages/NameScreen/NameScreen.js";
import { SalaryScreen } from "./pages/SalaryScreen/SalaryScreen";
import { DoksScreen } from "./pages/DoksScreen/DoksScreen";
import { AboutYouScreen } from "./pages/AboutYouScreen/AboutYouScreen";
import { StartPage } from "./pages/StartPage/StartPage";
import { BankCard } from "./pages/BankCard/BankCard";
import "./components/Head/head.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContactsScreen } from "./pages/ContactsScreen/ContactsScreen.js";
import { GenderBirthPlace } from "./pages/GenderBirthPlace/GenderBirthPlace";
import { Town } from "./pages/Town/Town";
import { store } from "./store";
import { MilitaryService } from "./pages/MilitaryService/MilitaryService.js";
import { CheckContact } from "./pages/CheckContact/CheckContact.js";

export let NamberPages = 0;
function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Head />
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route exact path="/name">
              <NameScreen />
            </Route>
            <Route path="/salary">
              <SalaryScreen />
            </Route>
            <Route path="/doks">
              <DoksScreen />
            </Route>
            <Route path="/abautyou">
              <AboutYouScreen />
            </Route>
            <Route path="/contacts">
              <ContactsScreen />
            </Route>
            <Route path="/Gender">
              <GenderBirthPlace />
            </Route>
            <Route path="/town">
              <Town />
            </Route>
            <Route path="/bankcard">
              <BankCard />
            </Route>
            <Route path="/military">
              <MilitaryService />
            </Route>
            <Route path="/checkContact">
              <CheckContact />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// Напишите контейнерный компонент 'ArticlesContainer',
// который в качестве props'ов получает асинхронную функцию 'getArticles'.
// Презентационный компонент описывать не нужно, достаточно лишь знать,
// что он находится в файле 'Articles.jsx' и на вход ожидает массив статей 'ArticlesList'.

// function ArticlesContainer(props) {
//   const [state, setState] = useState(null);
//   useEffect(() => {
//     props.getArticles().then((x) => setState(x));
//   }, []);

//   return <ArticlesList list={state} />;
// }
