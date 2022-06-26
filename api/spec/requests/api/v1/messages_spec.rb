require 'rails_helper'

RSpec.describe 'Api::V1::Messages', type: :request do
  let(:password) { 'password' }
  let(:user) { create(:user, password:) }
  let(:room) { create(:room) }
  let(:message) { create(:message) }

  before do
    @auth_headers = login(user.email, 'password')
  end

  describe '#create' do
    context 'normal' do
      it 'response at create is created' do
        post(api_v1_messages_path(id: room.id), params: { user_id: user.id, room_id: room.id, content: 'test' }, headers: @auth_headers)
        expect(response).to have_http_status :created
      end
    end
  end
end
