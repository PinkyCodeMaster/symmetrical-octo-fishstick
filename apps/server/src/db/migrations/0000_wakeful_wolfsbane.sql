CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
