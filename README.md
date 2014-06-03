#Jamy
<img src="http://i.imgur.com/M7QCUKb.jpg" title="Hosted by imgur.com" />

### Jamy is a curated mp3 blog aggregator.  

This app is using Redis with Sidekiq and a scheduling gem called Whenever to pull in super fresh tracks.  

To update the crontab with Whenever, run

```
bundle exec whenever --update-crontab
```

To view your crontab, run

```
crontab -l
```

and to clear the crontab, run
```
crontab -r
```





