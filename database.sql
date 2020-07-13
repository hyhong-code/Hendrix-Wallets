CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) NOT NULL UNIQUE CHECK (
        email ~ '^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$'
    ),
    name VARCHAR(50) NOT NULL CHECK (
        name ~* '^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$'
    ),
    password VARCHAR(150) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE profiles(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) UNIQUE,
    photo VARCHAR(150) DEFAULT 'default.jpeg',
    phone VARCHAR(150) CHECK (
        phone ~ '(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?'
    ),
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE item_categories(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE items(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    category_id UUID NOT NULL REFERENCES item_categories(id),
    description VARCHAR(150) NOT NULL,
    price BIGINT NOT NULL,
    discount BIGINT CHECK (discount < price),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    instructions VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending' CHECK (
        status IN ('pending', 'shipped', 'delivered', 'canceled')
    ),
    created_at TIMESTAMP DEFAULT NOW(),
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    canceled_at TIMESTAMP
);

CREATE TABLE order_items(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id),
    item_id UUID NOT NULL REFERENCES items(id),
    quantity INT NOT NULL CHECK (quantity > 0)
);