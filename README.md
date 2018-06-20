## Hot to use
```
GET /
GET /stat
```

Online demo: http://104.45.21.105:7071/

## Launch local
```
docker-compose build
docker-compose up
```

## Launch cloud
via Kubernetes
```
kubectl create -f azure.kuber.yml
```

## TODO
- CircleCI
- LoadBalancer: Ingress / Azure Balancer
- Intergration tests