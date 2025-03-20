import React, { Suspense } from "react";
import AppRouter from "app/providers/Routers/ui/AppRouter";
import { Loader } from "shared";
import "./index.css";
import { Header, Footer } from "widgets";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div
        className={
          "flex flex-col items-center min-h-dvh w-full h-max relative bg-background overflow-y-hidden"
        }
      >
        <Header />

        <main className={"flex flex-grow pt-[108px] w-full md:pt-[104px]"}>
          <AppRouter />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
