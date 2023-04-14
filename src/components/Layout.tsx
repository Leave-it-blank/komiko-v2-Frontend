import {
    Fragment,
    JSXElementConstructor,
    ReactElement,
    ReactFragment,
    ReactPortal,
} from "react";
function Layout(props: {
    children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
    return (
        <Fragment>
            <div className="container">
                <main>{props.children}</main>
            </div>
        </Fragment>
    );
}

export default Layout;

// Path: src/pages/index.tsx

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   // ...
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // ...
// }
