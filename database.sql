CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(150) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE profiles(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) UNIQUE,
    photo VARCHAR(150) DEFAULT 'https://haiyanghongnewbucket.s3-us-west-2.amazonaws.com/hendrix/user/default-user.png',
    phone VARCHAR(150),
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE item_categories(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(150) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE items(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL UNIQUE,
    category_id UUID NOT NULL REFERENCES item_categories(id),
    description VARCHAR(150) NOT NULL,
    photo VARCHAR(255) NOT NULL,
    price BIGINT NOT NULL CHECK (price > 0),
    discount BIGINT DEFAULT 0 CHECK (discount < price),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE carts(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    is_order BOOLEAN DEFAULT FALSE
);

CREATE TABLE cart_items(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cart_id UUID NOT NULL REFERENCES carts(id),
    item_id UUID NOT NULL REFERENCES items(id),
    quantity INT NOT NULL CHECK (quantity > 0)
);

CREATE TABLE orders(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    cart_id UUID NOT NULL REFERENCES carts(id) UNIQUE,
    email VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(150) NOT NULL,
    address VARCHAR(255) NOT NULL,
    instructions VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Unpaid' CHECK (
        status IN (
            'Unpaid',
            'Processing',
            'Shipped',
            'Delivered',
            'Canceled'
        )
    ),
    stripe_token VARCHAR(255),
    total_price BIGINT NOT NULL CHECK (total_price > 0),
    created_at TIMESTAMP DEFAULT NOW(),
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP,
    canceled_at TIMESTAMP
);
