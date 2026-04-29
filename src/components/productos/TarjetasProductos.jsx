import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TarjetasProductos = ({ productos = [], abrirModalEdicion, abrirModalEliminacion }) => {
  return (
    <Row className="g-3">
      {productos.map((producto) => (
        <Col xs={12} key={producto.id_producto}>
          <Card className="h-100 shadow-sm">
            <div className="position-relative">
              {/* Imagen del producto */}
              {producto.url_imagen ? (
                <Card.Img
                  variant="top"
                  src={producto.url_imagen}
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                  }}
                  alt={producto.nombre_producto}
                />
              ) : (
                <div 
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{ height: '180px' }}
                >
                  <i className="bi bi-image text-muted" style={{ fontSize: '3rem' }}></i>
                </div>
              )}
            </div>

            <Card.Body>
              <Card.Title className="mb-2">
                {producto.nombre_producto || 'Sin nombre'}
              </Card.Title>

              <Card.Text className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                {producto.descripcion_producto || 'Sin descripción'}
              </Card.Text>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="text-success mb-0 fw-bold">
                  ${parseFloat(producto.precio_venta || 0).toFixed(2)}
                </h5>
                
                <span className="badge bg-success">Activo</span>
              </div>

              {/* Acciones */}
              <div className="d-flex gap-2">
                <Button
                  variant="outline-warning"
                  size="sm"
                  className="flex-fill"
                  onClick={() => abrirModalEdicion(producto)}
                >
                  <i className="bi bi-pencil me-1"></i> Editar
                </Button>
                
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="flex-fill"
                  onClick={() => abrirModalEliminacion(producto)}
                >
                  <i className="bi bi-trash me-1"></i> Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {productos.length === 0 && (
        <Col xs={12}>
          <p className="text-center text-muted py-5">No hay productos para mostrar</p>
        </Col>
      )}
    </Row>
  );
};

export default TarjetasProductos;