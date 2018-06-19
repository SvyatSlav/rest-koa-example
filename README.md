##Hot to use
GET /
GET /stat

Online demo: 51.145.130.171 

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

##TODO
- CircleCI
- LoadBalancer: Ingress / Azure Balancer
- Intergration tests