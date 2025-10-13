import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Filters({ state, dispatch }) {
  const dropdownStyle = {
    border: "1px solid #ddd",
    borderRadius: "20px",
    margin: "0 5px",
    backgroundColor: "white",
    zIndex: "50",
  };

  const filterBarStyle = {
    backgroundColor: "#f8f9fa", // light gray background
    borderBottom: "1px solid #dee2e6",
  };

  return (
    <div
      className="xl:hidden filters-bar flex py-3 px-4 z-60"
      style={filterBarStyle}
    >
      {/* Category Dropdown */}
      <Dropdown style={dropdownStyle}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-category"
          className="border-0 rounded-pill px-3"
        >
          Category
        </Dropdown.Toggle>
        <Dropdown.Menu
          className="p-3 z-60"
          style={{ minWidth: "250px", zIndex: "60" }}
        >
          <div className="mb-2">
            <h6 className="fw-bold mb-2">Woman</h6>
            {["Dress", "Shirt", "Skirt"].map((item) => (
              <div key={item} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={state.Woman[item]}
                  onChange={() =>
                    dispatch({
                      categories: "Woman",
                      subcategories: item,
                    })
                  }
                  id={`filter-woman-${item}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`filter-woman-${item}`}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-2">
            <h6 className="fw-bold mb-2">Man</h6>
            {["Shirt", "Pants", "Jacket"].map((item) => (
              <div key={item} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={state.Man[item]}
                  onChange={() =>
                    dispatch({
                      categories: "Man",
                      subcategories: item,
                    })
                  }
                  id={`filter-man-${item}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`filter-man-${item}`}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>

          <div className="mb-2">
            <h6 className="fw-bold mb-2">Unisex</h6>
            {["Tshirt", "Accessories", "Shoes"].map((item) => (
              <div key={item} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={state.Unisex[item]}
                  onChange={() =>
                    dispatch({
                      categories: "Unisex",
                      subcategories: item,
                    })
                  }
                  id={`filter-unisex-${item}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`filter-unisex-${item}`}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>

      {/* Price Dropdown - Placeholder */}
      <Dropdown style={dropdownStyle}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-price"
          className="border-0 rounded-pill px-3"
        >
          Price
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3">
          <div className="text-muted">Price filter coming soon...</div>
        </Dropdown.Menu>
      </Dropdown>

      {/* Size Dropdown */}
      <Dropdown style={dropdownStyle}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-size"
          className="border-0 rounded-pill px-3"
        >
          Size
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3">
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={state.Size[size]}
                onChange={() =>
                  dispatch({
                    categories: "Size",
                    subcategories: size,
                  })
                }
                id={`filter-size-${size}`}
              />
              <label
                className="form-check-label"
                htmlFor={`filter-size-${size}`}
              >
                {size}
              </label>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Color Dropdown */}
      <Dropdown style={dropdownStyle}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-color"
          className="border-0 rounded-pill px-3"
        >
          Color
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-3">
          {["Red", "Blue", "Black", "White", "Green", "Yellow"].map((color) => (
            <div key={color} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={state.Color[color]}
                onChange={() =>
                  dispatch({
                    categories: "Color",
                    subcategories: color,
                  })
                }
                id={`filter-color-${color}`}
              />
              <label
                className="form-check-label"
                htmlFor={`filter-color-${color}`}
              >
                {color}
              </label>
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
