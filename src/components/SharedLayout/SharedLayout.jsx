import { Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { saveToStorage } from 'services/localStorService';



export const SharedLayout = () => {

  const [queryParameters] = useSearchParams()
  const name = queryParameters.get("name");
 if(name){saveToStorage("authorization_id", name)}

  return (
    <>
      <Suspense fallback={'Loading...'}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
