import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const handleGoogleLogin = () => {
    // Redirect to the backend endpoint that initiates the OAuth2 flow
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return (
    <div className="bg-gradient-primary-to-secondary" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="shadow-lg border-0 rounded-lg">
              <Card.Body className="p-5 text-center">
                <h2 className="fw-bold mb-4">Welcome to Academic ERP</h2>
                <p className="text-muted mb-5">Sign in with your Google account to manage your courses.</p>
                <Button 
                  variant="outline-primary" 
                  onClick={handleGoogleLogin}
                  className="w-100 d-flex align-items-center justify-content-center py-2"
                  size="lg"
                >
                  <FcGoogle size={24} className="me-3" />
                  Sign in with Google
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
