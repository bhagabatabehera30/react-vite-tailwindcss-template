up:
	docker compose -f .local/docker-compose.yml up -d

build:
	docker compose -f .local/docker-compose.yml up --build -d

down:
	docker compose -f .local/docker-compose.yml down

restart:
	docker compose -f .local/docker-compose.yml down && docker compose -f .local/docker-compose.yml up -d

service:
	docker compose -f .local/docker-compose.yml up --build frontend_app -d