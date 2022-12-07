import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HeaderAdCard = () => {
  return (
    <Card style={{margin : "30px 10px ", minHeight: '12rem' }}>
      <Card.Body>
        <center>
        <Card.Title>ADVERTISEMENT</Card.Title>
        <Button variant="primary">Go somewhere</Button>
        </center>
      </Card.Body>
    </Card>
  );
}

export default HeaderAdCard;