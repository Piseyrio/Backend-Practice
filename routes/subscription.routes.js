import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));
subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));
//get all user subscription
subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subscription' }));
//cancel subscription
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));
//renewals subscription
subscriptionRouter.put('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming subscription' }));


export default subscriptionRouter;