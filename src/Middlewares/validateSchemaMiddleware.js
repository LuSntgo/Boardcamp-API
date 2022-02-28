export function validateSchemaMiddleware(schema) {
    return (req, res, next) => {
      const validation = schema.validate(req.body);
      if (validation.error) {
        res.sendStatus(422);
        return;
      }
  
      next();
    }
  }