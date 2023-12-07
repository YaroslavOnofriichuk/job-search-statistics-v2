export const PublicKey = Symbol("PUBLIC_KEY");

export const jwtConstants = {
    access: {
        secret: process.env.JWT_SECRET,
        subject: 'access',
        expiresIn: '30s',
    },
    refresh: {
        secret: process.env.JWT_SECRET,
        subject: 'refresh',
        expiresIn: '60s',
    },
  };
