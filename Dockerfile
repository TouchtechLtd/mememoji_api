FROM python:3.6.2-slim
RUN apt-get update
RUN apt-get -y install libglib2.0-0

RUN mkdir /app
COPY requirements.txt /app
RUN pip install -r /app/requirements.txt

COPY . /app
WORKDIR /app/webapp

EXPOSE 5000
CMD ["python", "run.py"]
