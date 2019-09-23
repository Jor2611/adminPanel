CREATE TABLE reports
(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
name VARCHAR(50) NOT NULL,
description text NOT NULL,
estimation NUMERIC(2,0) NOT NULL,
spent VARCHAR(30) NOT NULL,
approved BOOLEAN DEFAULT false,
seen BOOLEAN DEFAULT false,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
owner_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
CHECK (estimation BETWEEN 1 AND 10)
);