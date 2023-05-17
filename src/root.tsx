// @refresh reload
import { Suspense } from "solid-js";
import {MDXProvider} from "solid-mdx";

import {
  A,
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  unstable_island
} from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
const Counter = unstable_island(() => import("./components/Counter"));

export default function Root() {

  return (
        <Html lang="en">
          <Head>
            <Title>SolidStart - Bare</Title>
            <Meta charset="utf-8" />
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Body>
            <ErrorBoundary>
              <A href="/">Index</A>&nbsp;
              <A href="/about">About</A>&nbsp;
              <A href="/test">Test</A>
              <p>Counter: <Counter /></p>
              <MDXProvider components={{
                'test': (prop) => {
                  return (
                      <div>
                          <p><Counter /></p>
                          <p>children: {prop.children}</p>
                          <p>attr: {prop.attr}</p>
                      </div>
                  )
                },
              }}>
              <Suspense>
                  <main>
                    <Routes>
                      <FileRoutes />
                    </Routes>
                  </main>
              </Suspense>
              </MDXProvider>
              <Scripts />
            </ErrorBoundary>
          </Body>
        </Html>
  );
}
