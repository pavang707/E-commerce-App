import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem,Form} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Rating from '../component/Rating'
import {listProductDetails} from '../productAction.js'
import Message from '../component/Message'
import Loader from '../component/Loader'
const ProductScreen = ({history,match}) => {
    const [qty,setQty]=useState(1)
     const dispatch=useDispatch()

     const productDetail =useSelector(state => state.productDetails)
     const {loading,error,product} =productDetail

     
     useEffect(()=>{
        dispatch(listProductDetails(match.params.id)) 
    
     },[dispatch,match])
     const addToCartHandler=()=>{
        history.push(`/cart/${match.params.id}/qty?=${qty}`)
     }


       return (
        <>
          <Link className="btn btn-dark my-3" to="/">Go Back
          </Link>
     {loading ? <Loader/> : error ? <Message>{error}</Message>:(
         
        <Row>
        <Col md={6} >
            <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
                </ListGroup.Item>
            <ListGroup.Item>
                Price:${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description:${product.description}
            </ListGroup.Item>
            </ListGroup>
            
        </Col>
       
         <Col md={3}>
            <Card>

                <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Col>
                      Price:
                      </Col>
                      <Col>
                      <strong>
                          ${product.price}
                      </strong>
                      </Col>   
                    </ListGroup.Item>
                     <ListGroup.Item>
                       <Col>
                      Status:
                      </Col>
                      <Col>
                      <strong>
                         {product.countInStock>0 ? 'In Stock' :'Out of Stock'}
                      </strong>
                      </Col>   
                    </ListGroup.Item>
                    {product.countInStock>0 && (
                        <ListGroup.Item>
                            <Row>
                            <Col>
                            Qty
                            </Col>
                            <Col>
                            <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                                {
                                [...Array(product.countInStock).keys()].map((x)=>(
                                    <option key={x+1} value={x+1}>
                                        {x + 1}
                                    </option>
                                ))
                            }
                          </Form.Control>
                            </Col>
                            </Row>

                        </ListGroup.Item>
                    ) }
                    <ListGroup.Item>
                        <Button
                        onClick={addToCartHandler}
                        className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                    </ListGroup.Item> 
               </ListGroup>
            </Card>
       </Col> 
    </Row> 
     )}
     
    </>
     
     )
     

     }

export default ProductScreen