FROM python:3.6.2-slim

WORKDIR /app

ADD . /app

RUN pip install -r requirements.txt

WORKDIR /app/webapp

EXPOSE 5000

CMD ["python", "run.py"]