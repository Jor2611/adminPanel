CREATE TABLE tokens
(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
token text NOT NULL,
owner_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL
);