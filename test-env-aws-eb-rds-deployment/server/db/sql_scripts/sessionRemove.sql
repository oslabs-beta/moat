DELETE FROM user_sessions
WHERE date_created + interval '3600 seconds' < CURRENT_TIMESTAMP;