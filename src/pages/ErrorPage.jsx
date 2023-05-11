import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <div style={{ textAlign: 'center' }}>
          <h1>An error occurred!</h1>
          <p>Could not find this page!</p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ErrorPage;
