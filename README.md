<img src="http://i.imgur.com/H1gGX6w.png" title="Hosted by imgur.com" />
<img src="http://i.imgur.com/CbikJVX.png" title="Hosted by imgur.com" />

###Welcome to Jamy, a curated mp3 blog aggregator.  

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





