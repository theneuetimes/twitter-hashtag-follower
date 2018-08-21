let tweetTemplate = (data) => {
  // data = JSON.parse(data);

  return `
    <li class="js-stream-item stream-item stream-item" data-item-id=${data.id} id="stream-item-tweet-${data.id}" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{&quot;suggestion_type&quot;:&quot;BeforeRecapTweet&quot;,&quot;controller_data&quot;:&quot;DAABCgABAAAAAAECAFEAAA==&quot;},&quot;tweet_ids&quot;:&quot;${data.id}&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
      <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet has-cards dismissible-content has-content" data-tweet-id="${data.id_str}" data-item-id="${data.id_str}" data-permalink-path="/${data.user.screen_name}/status/${data.id_str}" data-conversation-id="${data.id_str}" data-tweet-nonce="${data.id_str}-8e470b35-bab2-4bd6-abb0-a0d16a711e20" data-tweet-stat-initialized="true" data-screen-name="${data.user.name}" data-name="${data.user.name}" data-user-id="${data.user.id}" data-you-follow="false" data-follows-you="false" data-you-block="false" data-disclosure-type="" data-has-cards="true" data-component-context="suggest_before_recap_tweet">
        <div class="content">
          <div class="stream-item-header">
            <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/" data-user-id="${data.user.id}">
              <img class="avatar js-action-profile-avatar" src="${data.user.profile_image_url_https}" alt="">
              <span class="FullNameGroup">
                <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">${data.user.name}</strong><span>&rlm;</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span>
              </span>

              <span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>${data.user.screen_name}</b></span></a>
                
              <small class="time">
                <a href="/${data.user.screen_name}/status/${data.id_str}" class="tweet-timestamp js-permalink js-nav js-tooltip" title="${data.created_at}" data-conversation-id="${data.id_str}"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="0" data-time-ms="0" data-long-form="true" aria-hidden="true">1m</span><span class="u-hiddenVisually" data-aria-label-part="last">1 minute ago</span></a>
              </small>

              <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
                <div class="dropdown">
                  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
                    <div class="IconContainer js-tooltip" title="More">
                      <span class="Icon Icon--caretDownLight Icon--small"></span>
                      <span class="u-hiddenVisually">More</span>
                    </div>
                  </button>
                  <div class="dropdown-menu is-autoCentered">
                    <div class="dropdown-caret">
                      <div class="caret-outer"></div>
                      <div class="caret-inner"></div>
                    </div>

                    <ul>
                      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
                        <button type="button" class="dropdown-link">Copy link to Tweet</button>
                      </li>
                      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
                        <button type="button" class="dropdown-link">Embed Tweet</button>
                      </li>
                      <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>${data.user.screen_name}</b></span></button></li>
                      <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>${data.user.screen_name}</b></span></button></li>
                      <li class="block-link js-actionBlock" data-nav="block">
                        <button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>${data.user.screen_name}</b></span></button>
                      </li>
                      <li class="unblock-link js-actionUnblock" data-nav="unblock">
                        <button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>${data.user.screen_name}</b></span></button>
                      </li>
                      <li class="report-link js-actionReport" data-nav="report">
                        <button type="button" class="dropdown-link">Report Tweet</button>
                      </li>
                      <li>
                        <button type="button" class="dropdown-link feedback-action action-prompt" data-feedback-type="DontLike" data-feedback-url="">I don't like this Tweet</button>
                      </li>
                      <li class="dropdown-divider"></li>
                      <li class="js-actionMomentMakerAddTweetToOtherMoment MomentMakerAddTweetToOtherMoment">
                        <button type="button" class="dropdown-link">Add to other Moment</button>
                      </li>
                      <li class="js-actionMomentMakerCreateMoment">
                        <button type="button" class="dropdown-link">Add to new Moment</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          
            <div class="js-tweet-text-container">
              <p class="TweetTextSize js-tweet-text tweet-text" lang="en" data-aria-label-part="0">${data.text}</p>
            </div>

            ${data.entities.media ? (
              `<div class="AdaptiveMediaOuterContainer">
                <div class="AdaptiveMedia is-square">
                  <div class="AdaptiveMedia-container">
                    <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.0 * 100% - 0.5px);">
                      <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="${data.entities.media[0]}" data-element-context="platform_photo_card" style="background-color:rgba(64,55,44,1.0);" data-dominant-color="[64,55,44]">
                        <img data-aria-label-part="" src="${data.entities.media[0]}" alt="" style="width: 100%; top: -0px;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
            ) : '' }

          
            <div class="stream-item-footer">
              <div class="ProfileTweet-actionCountList u-hiddenVisually">
                <span class="ProfileTweet-action--reply u-hiddenVisually">
                  <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
                    <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-${data.id_str}">0 replies</span>
                  </span>
                </span>
                <span class="ProfileTweet-action--retweet u-hiddenVisually">
                  <span class="ProfileTweet-actionCount" data-tweet-stat-count="0">
                    <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-${data.id_str}" data-aria-label-part="">0 retweets</span>
                  </span>
                </span>
                <span class="ProfileTweet-action--favorite u-hiddenVisually">
                  <span class="ProfileTweet-actionCount" data-tweet-stat-count="0">
                    <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-${data.id_str}" data-aria-label-part="">0 likes</span>
                  </span>
                </span>
              </div>

              <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
                <div class="ProfileTweet-action ProfileTweet-action--reply">
                  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-${data.id_str}">
                    <div class="IconContainer js-tooltip" title="Reply">
                      <span class="Icon Icon--medium Icon--reply"></span>
                      <span class="u-hiddenVisually">Reply</span>
                    </div>

                    <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero ">
                      <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
                    </span>
                  </button>
                </div>

                <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-${data.id_str}">
                    <div class="IconContainer js-tooltip" title="Retweet">
                      <span class="Icon Icon--medium Icon--retweet"></span>
                      <span class="u-hiddenVisually">Retweet</span>
                    </div>
                    <span class="ProfileTweet-actionCount">
                      <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">0</span>
                    </span>
                  </button>

                  <button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
                    <div class="IconContainer js-tooltip" title="Undo retweet">
                      <span class="Icon Icon--medium Icon--retweet"></span>
                      <span class="u-hiddenVisually">Retweeted</span>
                    </div>
                    <span class="ProfileTweet-actionCount">
                      <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">0</span>
                    </span>
                  </button>
                </div>


                <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
                  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-${data.id_str}">
                    <div class="IconContainer js-tooltip" title="Like">
                      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
                      <div class="HeartAnimation"></div>
                      <span class="u-hiddenVisually">Like</span>
                    </div>
                    <span class="ProfileTweet-actionCount">
                      <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">0</span>
                    </span>
                  </button>

                  <button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
                    <div class="IconContainer js-tooltip" title="Undo like">
                      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
                      <div class="HeartAnimation"></div>
                      <span class="u-hiddenVisually">Liked</span>
                    </div>
                    <span class="ProfileTweet-actionCount">
                      <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">0</span>
                    </span>
                  </button>
                </div>

                <div class="ProfileTweet-action ProfileTweet-action--dm">
                  <button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionShareViaDM" type="button" data-nav="share_tweet_dm">
                    <div class="IconContainer js-tooltip" title="Direct message">
                      <span class="Icon Icon--medium Icon--dm"></span>
                      <span class="u-hiddenVisually">Direct message</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
  `;
}