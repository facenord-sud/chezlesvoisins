RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authorize_with do
  #   if current_user.try(:is_admin?)
  #     true
  #   else
  #     Rails.logger.debug 'salutasdékasljkhdasjlhdgasjhkdvakhgsvdkahsdvkjhasvdkahsjgfvghjksafvkhjsafvksjahdfvhjskdafvadjshfvs'
  #     flash[:error] = "Tu n'est pas admin..."
  #     if current_user.nil?
  #       redirect_to '/users/sign_up'
  #     else
  #       redirect_to '/'
  #     end
  #   end
  # end

  config.authorize_with do
    authenticate_or_request_with_http_basic('Site Message') do |username, password|
      username == ENV['http_username'] && password == ENV['http_password']
    end
  end

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
